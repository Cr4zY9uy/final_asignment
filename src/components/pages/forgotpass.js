import React from 'react'
import './forgotpass.css';
import { Link } from 'react-router-dom';
export default function ForgotPass() {

    // console.log(watch('username'));

    return (
        <section className='forgot_password'>

            <div className="form_forgot_password">
                <h2 className='pb-2'>Forgot password</h2>
                <form id='form' className='flex flex-col'>
                    <input type="email" placeholder=' ' id='email' name='email' />
                    <label for="email" style={{ textAlign: 'left' }} className='user_action'>Email</label>
                    <button className='btn send mt-0'>Send</button>
                </form>
                <div className='options_link'>
                    <h5>Already had an account? <Link to={'/login'} className='login_link'>Login</Link></h5>
                    <h5>Don't have an account? <Link to={'/sign-up'} className='register_link'>Register</Link></h5>
                </div>
            </div>
        </section>
    )
}