const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const nodemailer = require("nodemailer");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const url_db = `mongodb+srv://anhnguyen:uY8oAOIDpeRYHIJk@coffee.lwrk1sq.mongodb.net/coffe_store`;
const userModal = require("./server/user");
const productModal = require("./server/product");
const categoryModal = require("./server/category");
const orderModal = require("./server/order");
const favouriteModal = require("./server/favourite");
const cartModal = require("./server/cart");
const { resolveHostname } = require("nodemailer/lib/shared");
app.listen(port, function () {
    console.log("Server is running...");
})
mongoose
    .connect(url_db)
    .then(() => {
        console.log("Connecting to database...");
    })
    .catch(error => console.log(error));
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

// const checkAuth = (req, res, next) => {
//     if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
//         const token = req.headers.authorization.split(' ')[1];
//         jwt.verify(token, 'RESTFULLAPIs', function (err, decode) {
//             if (err) req.user = undefined;
//             req.user = decode;
//             return next();
//         });
//     } else {
//         req.user = undefined;
//         return res.status(401).json({ message: "Unauthorized user" });
//     }
// }
const loginValidator = () => {
    return [
        check("email", "Vui long nhap email").not().isEmpty(),
        check("email", "Email phai dung dinh dang").isEmail(),
        check("password", "Password tu 6 ky tu").isLength({ min: 6 })
    ]
}
app.post("/auth/login", loginValidator(), async function (req, res) {
    try {
        const email = req.body.email;
        const u = await userModal.findOne({ email: email });
        if (u == null) {
            res.json({ message: "Email not existed" });
            return;
        }
        const verify = await bcrypt.compare(req.body.password, u.password);
        if (!verify) {
            res.json({ message: "Password not true" });
            return;
        }
        return res.json({
            user: {
                email: u.email,
                fullname: u.fullname,
                address: u.address,
                phone: u.phone,
                birthday: u.birthday,
                user_id: u._id
            },
            token: jwt.sign({ email: u.email, fullname: u.fullname, _id: u._id }, 'RESTFULAPIs')
        })
    } catch (error) {
        return res.send(error.message);
    }
})
const registerValidator = () => {
    return [
        check("email", "Vui long nhap email").not().isEmpty(),
        check("email", "Email phai dung dinh dang").isEmail(),

        // Custom validation to check if email already exists
        check("email").custom(async (value) => {
            const existingUser = await userModal.findOne({ email: value });
            if (existingUser) {
                throw new Error('E-mail already in use');
            }
            return true;
        }),

        check("password", "Password tu 6 ky tu").isLength({ min: 6 }),
        check("fullname", "Fullname khong duoc de trong").not().isEmpty()
    ];
};

app.post("/auth/register", registerValidator(), async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array().map(error => error.msg) });
    }

    try {
        const data = req.body;
        if (data.confirmPassword !== data.password) {
            return res.json({ message: "Confirm password not true" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password, salt);
        data.password = hashed;
        const newU = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        const u = new userModal(newU);

        await u.save();
        res.json({ message: "Done" });
    } catch (error) {
        if (error.message === 'E-mail already in use') {
            return res.json({ errors: ['E-mail already in use'] });
        }
        return res.json({ message: error.message });
    }
});

// app.use("/checkout", checkAuth);
// app.use("/category", checkAuth);
// app.use("/product", checkAuth);
// app.use("/product/:id", checkAuth);
// app.use("/products/search", checkAuth);
// app.use("/category/:name", checkAuth);
// app.use("/products", checkAuth);
// app.use("/products/price", checkAuth);
// app.use("/products/category", checkAuth);
// app.use("/products/sales", checkAuth);
// app.use("/products/new", checkAuth);
// app.use("/products/limited", checkAuth);
app.post("/product/add", async function (req, res) {
    try {
        const data = req.body;
        const p = new productModal(data);
        await p.save();
        res.json({ message: "Done" })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.post("/category/add", async function (req, res) {
    try {
        const data = req.body;

        const c = new categoryModal(data);

        await c.save();
        res.json({ message: "Done" })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.get("/category", async (req, res) => {
    try {
        const categories = await categoryModal.find().sort({ price: 1 });;

        if (categories.length === 0) {
            return res.json({ message: "No categories exist" });
        }

        const categoryList = categories.map((category) => (
            category.category_name
        ));

        return res.json(categoryList);
    } catch (error) {
        return res.json({ message: error.message });
    }
});

app.get("/product", async (req, res) => {
    try {
        const products = await productModal.find().sort({ price: 1 });;

        if (products.length === 0) {
            return res.json({ message: "No categories exist" });
        }
        const productList = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/product/:id", async function (req, res) {
    try {
        const id = req.params.id ? req.params.id : 1; // path parameters
        const product = await productModal.findOne({ product_id: id });
        if (product == null) {
            return res.json({ message: "No exist" });
        }
        return res.json({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        });
    } catch (error) {
        return res.send(error.message);
    }
});
app.get("/products/search", async function (req, res) {
    try {
        const _title = req.query._title ? req.query._title : null;
        const encodeName = decodeURIComponent(_title);
        const products = await productModal.find({ title: { $regex: new RegExp(encodeName, 'i') } });
        console.log(_title);
        if (products.length === 0) {
            return res.json({ message: "No product exists" });
        }

        const productFind = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
        }));

        return res.json(productFind);
    } catch (error) {
        return res.send(error.message);
    }
});

app.get("/category/:name", async function (req, res) {
    try {
        const cateName = req.params.name;
        const encodeName = decodeURIComponent(cateName);
        console.log(cateName);
        const products = await productModal.find({ category_name: encodeName }).sort({ price: 1 });;
        if (products.length === 0) {
            return res.json({ message: "No available" });
        }
        const productListCate = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
        }));
        return res.json({ category: encodeName, products: productListCate });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/products", async (req, res) => {
    try {
        const products = await productModal.find().sort({ price: 1 });

        if (products.length === 0) {
            return res.json({ message: "No products exist" });
        }

        const _limit = 8;
        const _page = parseInt(req.query._page) ? parseInt(req.query._page) : 1;

        const _skip = (_page - 1) * _limit;
        const _totalPage = Math.ceil(products.length / _limit);
        const productsPaginate = products.slice(_skip, _skip + _limit);

        if (productsPaginate.length === 0) {
            return res.json({ message: "No products exist" });
        }

        const productList = productsPaginate.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList, _totalPage: _totalPage, _totalProduct: productList.length });
    } catch (error) {
        return res.json({ message: error.message });
    }
});

app.get("/products/price", async (req, res) => {
    try {
        const _startPrice = parseInt(req.query._startPrice);
        const _endPrice = parseInt(req.query._endPrice);
        const _limit = 8;
        const _page = parseInt(req.query._page) ? parseInt(req.query._page) : 1;
        const _skip = (_page - 1) * _limit;
        const products = await productModal.find({ price: { $gte: _startPrice, $lte: _endPrice } }).sort({ price: 1 });
        if (products.length === 0) {
            return res.json({ message: "No products exist" });
        }

        const _totalPage = Math.ceil(products.length / _limit);
        const productsPaginate = products.slice(_skip, _skip + _limit);

        if (productsPaginate.length === 0) {
            return res.json({ message: "No products exist" });
        }
        const productList = productsPaginate.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList, _totalPage: _totalPage });
    } catch (error) {
        return res.json({ message: error.message });
    }
});

app.get("/products/category", async (req, res) => {
    try {
        const _startPrice = parseInt(req.query._startPrice);
        const _endPrice = parseInt(req.query._endPrice);
        const _category = req.query._category;
        const encodeName = decodeURIComponent(_category);
        const products = await productModal.find({
            category_name: encodeName,
            price: { $gte: _startPrice, $lte: _endPrice }
        }).sort({ price: 1 })
        if (products.length === 0) {
            return res.json({ message: "No products exist" });
        }

        const _limit = 8;
        const _page = parseInt(req.query._page) ? parseInt(req.query._page) : 1;
        const _skip = (_page - 1) * _limit;

        const productsPaginate = products.slice(_skip, _skip + _limit);
        const _totalPage = Math.ceil(products.length / _limit);
        if (productsPaginate.length === 0) {
            return res.json({ message: "No products exist" });
        }
        const productList = productsPaginate.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList, _totalPage: _totalPage });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/products/sales", async (req, res) => {
    try {
        const products = await productModal.find().sort({ price: 1 });;

        if (products.length === 0) {
            return res.json({ message: "No categories exist" });
        }
        const productList = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/products/limited", async (req, res) => {
    try {
        const products = await productModal.find().sort({ qty: 1 });;

        if (products.length === 0) {
            return res.json({ message: "No categories exist" });
        }
        const productList = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList });
    } catch (error) {
        return resolveHostname.json({ message: error.message });
    }
});
app.get("/products/new", async (req, res) => {
    try {
        const products = await productModal.find().sort({ createAt: -1 });;

        if (products.length === 0) {
            return res.json({ message: "No categories exist" });
        }
        const productList = products.map((product) => ({
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            qty: product.qty,
            weight: product.weight,
            thumbnail: product.thumbnail,
            category_name: product.category_name
        }));

        return res.json({ products: productList });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.post("/cart/add", async function (req, res) {
    try {
        const data = req.body;
        const c = new cartModal(data);
        await c.save();
        return res.json({ cart_id: c._id })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.post("/favourite/add", async function (req, res) {
    try {
        const data = req.body;
        const c = new favouriteModal(data);
        await c.save();
        return res.json({ favourite_id: c._id })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.post("/order/add", async function (req, res) {
    try {
        const data = req.body;
        const c = new orderModal(data);
        await c.save();
        return res.json({ order_id: c._id })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.get("/favourite", async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const products = await userModal.findOne({ _id: user_id }).populate('favourite', 'items -_id').select(' _id');
        if (products.length === 0) {
            return res.json({ message: "No favourite exist" });
        }
        return res.json({ products: products });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/cart", async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const products = await userModal.findOne({ _id: user_id }).populate('cart', 'items tax total -_id').select(' _id');
        if (products.length === 0) {
            return res.json({ message: "No favourite exist" });
        }
        return res.json({ products: products });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.get("/order", async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const products = await userModal.findOne({ _id: user_id }).populate('order', 'items first_name last_name address phone payment shipping -_id').select(' _id');
        if (products.length === 0) {
            return res.json({ message: "No favourite exist" });
        }
        return res.json({ products: products });
    } catch (error) {
        return res.json({ message: error.message });
    }
});
app.put("/user/foc", async function (req, res) {
    try {
        const user_id = req.body.user_id;
        const favourite = req.body.favourite;
        const order = req.body.order;
        const cart = req.body.cart;

        // Update favourite and cart
        const updatedUser = await userModal.findByIdAndUpdate(
            user_id,
            {
                favourite: favourite, cart: cart,
                $push: {
                    order: {
                        $each: order.map(orderItem => ({ orderItem })),
                        $position: -1
                    }
                }
            },
            { new: true }
        );
        updatedUser.save();
        // Update orders

        res.json({ message: "Done" });
    } catch (error) {
        return res.json({ message: error.message });
    }
});

app.put("/favourite/modify", async function (req, res) {
    try {
        const favourite_id = req.body.favourite_id;
        const data = req.body.items;
        const c = await favouriteModal.findByIdAndUpdate(favourite_id,
            {
                items: data,
            },
            {
                new: true,
            }
        );
        await c.save();
        res.json({ message: "Done" })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.put("/cart/modify", async function (req, res) {
    try {
        const cart_id = req.body._id;
        const tax = req.body.tax;
        const total = req.body.total;
        const data = req.body.cart;
        const c = await cartModal.findByIdAndUpdate(cart_id,
            {
                total: total,
                tax: tax,
                items: data
            },
            {
                new: true,
            }
        );
        await c.save();
        res.json({ message: "Done" })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
app.get("/orderdetail/:detail", async (req, res) => {
    try {
        const id = req.params.detail;
        const order = await orderModal.findOne({ _id: id });
        return res.json({
            order_id: order._id,
            first_name: order.first_name,
            last_name: order.last_name,
            email: order.email,
            address: order.address,
            phone: order.phone,
            payment: order.payment,
            shipping: order.shipping,
            items: order.items,
            total: order.total,
            date_create: order.createdAt
        });
    } catch (error) {
        return res.json({ message: error.message });
    }
})

app.post('/forgot', async (req, res) => {
    const emailF = req.body.email;
    try {
        const userRe = await userModal.findOne({ email: emailF });
        if (!userRe) {
            return res.json({ message: "No user match" });
        }

        const link = `//localhost:3000/resetpass/${userRe._id}`;
        return res.json({ link });
        // const transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: "heronakamura123@gmail.com",
        //         pass: "pektuesgmyyjuwft"
        //     }
        // });

        // const info = await transporter.sendMail({
        //     from: "heronakamura123@gmail.com",
        //     to: emailF,
        //     subject: 'Verify reset password',
        //     text: `Click this link below to reset your password. This link will be expired after 5 min.</br>${link}`
        // });
        // console.log("Message sent: %s", info.messageId);
    }
    catch (error) {
        return res.json({ message: error.message });
    }
})
const resetpassValidator = () => {
    return [
        check("password", "Password tu 6 ky tu").isLength({ min: 6 }),
        check("confirmPassword", "Password tu 6 ky tu").isLength({ min: 6 })
    ]
}
app.put('/resetpass/:id', resetpassValidator(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array().map(error => error.msg) });
    }
    const id = req.params.id;
    const data = req.body;
    const oldUser = await userModal.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ message: "No user match" });
    }
    if (data.password !== data.confirmPassword) {
        return res.json({ message: "The confirm password not match" });
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password, salt);
        data.password = hashed;
        const updatedUser = await userModal.findByIdAndUpdate(id, { password: data.password })
        updatedUser.save();
        res.json({ message: "Done" });
    } catch (error) {
        console.error(error);
    }
})
app.put('/user/update', async (req, res) => {
    try {
        const data = req.body;
        const updatedUser = await userModal.findByIdAndUpdate(
            data.user_id,
            {
                address: data.address,
                phone: data.phone,
                full_name: data.full_name,
                birthday: data.birthday,
            },
            { new: true }
        );
        await updatedUser.save();
        res.json({ message: "Done" })
    } catch (error) {
        return res.json({ message: error.message });
    }
})
