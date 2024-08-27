import React, { useState } from 'react'
import InputPage from '../input-field/input-field';
import './registration.css'
import logo from '../assets/images/my-logo.png'
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const [formValues, setFormValues] = useState({
        fullName: '',
        emailId: '',
        password: '',
        cpassword: '',
    });

    const navigate = useNavigate()

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
        navigate('/registration/otp')
    };

    const getFormFeilds = () => {
        return (
            <div className='reg-input-fields'>
                <InputPage
                    name={'fullName'}
                    placeholder={'Enter full Name'}
                    type={'text'}
                    autoComplete={'off'}
                    required={true}
                    label={'FullName'}
                    ariaLable={'Enter full name'}
                    value={formValues.fullName}
                    changeCallback={handleInputChange}
                    />

                <InputPage
                    name={'emailId'}
                    placeholder={'Enter Emailid'}
                    type={'text'}
                    autoComplete={'off'}
                    required={true}
                    label={'EmailId'}
                    ariaLable={'Enter EmailId'} 
                    value={formValues.emailId}
                    changeCallback={handleInputChange}
                    />

                <InputPage
                    name={'password'}
                    placeholder={'Enter password'}
                    type={'password'}
                    autoComplete={'off'}
                    required={true}
                    label={'Password'}
                    ariaLable={'Enter password'} 
                    value={formValues.password}
                    changeCallback={handleInputChange}
                    />

                <InputPage
                    name={'cpassword'}
                    placeholder={'Enter confirm password'}
                    type={'password'}
                    autoComplete={'off'}
                    required={true}
                    label={'Confirm password'}
                    ariaLable={'Enter confirm password'} 
                    value={formValues.cpassword}
                    changeCallback={handleInputChange}
                    />
            </div>
        )
    }

    return (
        <div className="registrtion-class">

            <div className="img-container">
                <img src={logo} alt="company logo" />
            </div>
            <form onSubmit={handleSubmit}  class="form-group">
                {getFormFeilds()}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default RegistrationPage