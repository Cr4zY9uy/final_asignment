import './products.css'
import ProductsCate from "../layouts/products_cate";
import FilterCateAndPrice from '../layouts/filterCateAndPrice';
function Products() {
    return (
        <div className='products_filter'>
            <FilterCateAndPrice />
            <ProductsCate />
        </div>
    );
}
export default Products;