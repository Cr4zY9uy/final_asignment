import React from 'react'
import './resetpass.css';
export default function ResetPass() {

    // console.log(watch('username'));

    return (
        <section className='reset_password'>

            <div className="form_reset_password">
                <h2>Change password</h2>

                <form id='form' className='flex flex-col'>
                    <input type="password" placeholder=' ' id='password' name='password' />
                    <label for="password" style={{ textAlign: 'left' }} className='user_action'>Password</label>
                    <input type="password" placeholder=' ' id='repassword' name='repassword' />
                    <label for="repassword" style={{ textAlign: 'left' }} className='user_action'>Verify password</label>
                    <button className='btn mt-0 changepass'>Change password</button>
                </form>
            </div>
        </section>
    )
}