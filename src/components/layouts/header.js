import { NavLink } from 'react-router-dom';
import './header.css';
function Header() {

    return (
        <header className="container pt-3">
            <div className="d-flex row header justify-content-between">
                <div className="col-2 d-flex">
                    <img src="./images/logo.png" alt="Logoimage" width="30px" height="40px" style={{ marginTop: "7px" }} /><span className="logo">Notos</span></div>
                <div className="col-8">
                    <form className="d-flex justify-content-end align-items-center me-5">
                        <input type="text" name="search" id="search" placeholder="Find our product..." className="w-75" /><i
                            className="bi bi-search"></i>
                    </form>
                </div>
                <div className="d-flex col-2 justify-content-end group-icon_header">
                    <div className="d-flex flex-column align-items-center me-4 main_menu"> <i className="bi bi-person-circle"></i>
                        <div className='account'>
                            <NavLink to={"/login"}><span>Login</span></NavLink><span>/</span><NavLink to={"/sign-up"}><span>Register</span></NavLink>
                            <div className='sub_menu'>
                                <NavLink to={"/account"}><span>Account</span></NavLink>
                                <NavLink to={"/orders"}><span>Orders</span></NavLink>
                                <NavLink to={"/orderdetail"}><span>Logout</span></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-column  align-items-center"><NavLink to={"/cart"}><i className="bi bi-cart3"></i><span className='number'>2</span>
                        <div className='cart'><span>Cart</span></div></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;