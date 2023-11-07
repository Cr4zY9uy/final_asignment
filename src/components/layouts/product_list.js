import './product_list.css';
function ProductList() {
    return (

        <div className="products container product-list d-flex">
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <div>
                    <p className='product_name'>Coffee Beans 1</p>
                    <p className='product_price'>500$</p>
                    <p className='rating'><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </p>
                </div>
                <div className="product-action">
                    <button className="btn-product btn-cart "><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <div>
                    <p className='product_name'>Coffee Beans 1</p>
                    <p className='product_price'>500$</p>
                    <p className='rating'><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </p>
                </div>

                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>

            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <div>
                    <p className='product_name'>Coffee Beans 1</p>
                    <p className='product_price'>500$</p>
                    <p className='rating'><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </p>
                </div>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <div>
                    <p className='product_name'>Coffee Beans 1</p>
                    <p className='product_price'>500$</p>
                    <p className='rating'><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </p>
                </div>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <div>
                    <p className='product_name'>Coffee Beans 1</p>
                    <p className='product_price'>500$</p>
                    <p className='rating'><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </p>
                </div>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
        </div>

    );
}
export default ProductList;