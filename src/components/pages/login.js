import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {

    // console.log(watch('username'));

    return (
        <section className='login'>

            <div className="form_login">
                <h2>Login</h2>

                <form id='form' className='flex flex-col'>
                    <input type="email" placeholder=' ' id='email' name='email' />
                    <label for="email" style={{ textAlign: 'left' }} className='user_action'>Email</label>
                    <input type="password" placeholder=' ' id='password' name='password' />
                    <label for="password" style={{ textAlign: 'left' }} className='user_action'>Password</label>
                    <div className='d-flex align-items-center justify-content-between options'>
                        <div className='d-flex align-items-center'><input type='checkbox'></input> Remeber password</div>
                        <div><Link to={'/forgotpass'} className='forgotpass_link'>Forgot password?</Link></div></div>
                    <button className='btn'>Login</button>
                </form>
                <h5>Don't have an account? <Link to={'/sign-up'} className='register_link'>Register</Link></h5>
            </div>
        </section>
    )
}