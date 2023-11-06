import './products_cate.css';
function ProductsCate() {
    return (
        <>
            <div className="products_cate d-flex flex-column">
                <div className='result'><h3>Showing 3 results</h3></div>
                <div className="products_result d-flex">
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
                </div>
            </div>
        </>
    );
}
export default ProductsCate;