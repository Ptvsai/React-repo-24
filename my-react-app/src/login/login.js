import React, { useState } from 'react'
import './login.css'

const LoginPage = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

    }

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <p className="forgot-password">Forgot Password?</p>
            <div className="signUp-class">
                <a href="/registration">signUp</a>
            </div>
        </div>
    )

}

export default LoginPage