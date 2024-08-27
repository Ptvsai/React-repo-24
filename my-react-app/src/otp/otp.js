import React, { useRef } from 'react'
import './otp.css'

const OtpPage = () =>{

    const otpInputRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('otpInputRef',otpInputRef.current.value);
        
    }

    return (
        <div className='otp-container'>
            <form onSubmit={handleSubmit}>
            <label className='otp-label'>Enter Otp</label>
            <input
                name='otp' 
                type='number'
                placeholder='Enter otp'
                aria-label='Enter otp'
                autoComplete='off'
                required={true}
                ref={otpInputRef}
            />
            <button type='submit'>submit</button>
            </form>
        </div>
    )

}

export default OtpPage