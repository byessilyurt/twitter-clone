import React from 'react'
import './styles/register.css'
function Register() {
    return (
        <div className='register-container'>
            <form className='register-form'>
                <label>
                    Email
                <input type="email" />
                </label>
                <label >
                    Password
                <input type="password" />
                </label>
                <label >
                    Password again
                <input type="password" />
                </label>
                <label>
                <div></div>
                <button type="submit" className='submit-button'>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default Register
