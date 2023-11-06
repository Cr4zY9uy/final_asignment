import './category_detail.css';
import ProductList from "../layouts/product_list";

function CategoryDetail() {
    return (
        <>
            <div className='banner_category'>
                <h1>Category name</h1>
            </div>

            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
        </>
    );
}
export default CategoryDetail;