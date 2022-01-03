import React from 'react'
import bgImg from '../assets/login/tw-bg.png'
function Login() {
    return (
        <div>
            <div className="left"><img src={bgImg} alt="background" /></div>
            <div className="right">
                <form>
                    <input type="email" />
                    <input type="password" />
                    <input type="password" />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default Login
