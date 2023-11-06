import React from 'react'
import './register.css';
import { Link } from 'react-router-dom';
export default function Register() {

    // console.log(watch('username'));

    return (
        <section>
            <div className="register">
                <div className="form_register">
                    <h2>Register</h2>

                    <form id='form' className='flex flex-col' >
                        <input type="text" placeholder=' ' id='username' name='username' />
                        <label for="username" style={{ textAlign: 'left' }} className='user_action'>Username</label>
                        <input type="password" placeholder=' ' id='password' name='password' />
                        <label for="password" style={{ textAlign: 'left' }} className='user_action'> Password</label>
                        <input type="password" placeholder=' ' id='repassword' name='repassword' />
                        <label for="repassword" style={{ textAlign: 'left' }} className='user_action'>Verify password</label>
                        <input type="email" placeholder=' ' id='email' name='email' />
                        <label for="email" style={{ textAlign: 'left' }} className='user_action'>Email</label>
                        <div className='d-flex align-items-start justify-content-between flex-column options'>
                            <div className='d-flex align-items-center'><input type='checkbox'></input> Acecpt terms of policies and use</div>
                            <div className='pt-1'>Already had an account? <Link to={'/login'} className='login_link'>Login</Link></div></div>
                        <button className='btn mt-0'>Signin</button>
                    </form>

                </div>

            </div>
        </section>
    )
}