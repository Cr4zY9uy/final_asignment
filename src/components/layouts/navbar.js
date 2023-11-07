import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
function Navbars() {
    return (
        <div className='parent_nav'>
            <nav className="nav-bar container d-flex ps-0">
                <div className="menu1">
                    <NavLink to={'/'} className='dropmenu'>Home</NavLink>
                </div>
                <NavLink to={"/category"} className={'menu1_item'}>Coffee drinks</NavLink>
                <NavLink to={"/category"} className={'menu1_item'}>Coffee beans</NavLink>
                <NavLink to={"/category"} className={'menu1_item'}>Coffee sweets</NavLink>
                <NavLink to={"/products"} className={'menu1_item'}>Shop</NavLink>
            </nav>
        </div>
    );
}

export default Navbars;