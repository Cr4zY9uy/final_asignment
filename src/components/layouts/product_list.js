import './product_list.css';
function ProductList() {
    return (

        <div className="products container product-list d-flex">
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <p>COFFEE 1</p>
                <p>500$</p>
                <div className="product-action">
                    <button className="btn-product btn-cart "><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <p>COFFEE 1</p>
                <p>500$</p>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>

            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <p>COFFEE 1</p>
                <p>500$</p>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <p>COFFEE 1</p>
                <p>500$</p>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
            <figure className="product-media text-center">
                <div className='favourite'><i className="bi bi-heart"></i></div>
                <a href="#">
                    <img src="./images/product1.jfif" height="270px" alt='product_image' />
                </a>
                <p>COFFEE 1</p>
                <p>500$</p>
                <div className="product-action">
                    <button className="btn-product btn-cart"><span>Add to cart</span></button>
                </div>
            </figure>
        </div>

    );
}
export default ProductList;