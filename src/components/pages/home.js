import Filter from "../layouts/filter";
import './home.css'
import ProductGrid from "../layouts/product_grid";
import ProductList from "../layouts/product_list";
import PurchasingPolicies from "../layouts/puchasing_policies";
import Slider from "../layouts/slider";

function Home() {
    return (
        <>
            <Slider />
            <ProductGrid />
            <Filter />
            <ProductList />
            <PurchasingPolicies />
        </>
    );
}
export default Home;