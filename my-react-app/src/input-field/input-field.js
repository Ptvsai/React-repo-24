import React from 'react'
import Prototypes from 'prop-types'

const InputPage = ({type, label, name, placeholder, inputClass, required, autoComplete, ariaLabel, blurCallback, changeCallback, value}) =>{

    const changeHandler = (e) => {
        console.log('change', e.target.value);

        if (changeCallback) {
            changeCallback(e)
        }
        
    }

    const blurHandler = (e) => {
        console.log('blur', e);
        
    }


    return (
        <div className={`input-group ${inputClass}`}>
            <label>{label}</label>
            <input type={type} 
                   name={name}
                   placeholder={placeholder}
                   class='input-field'
                   required={required}
                   autoComplete={autoComplete}
                   aria-label={ariaLabel}
                   onChange={changeHandler}
                   value={value}
                   onBlur={(e)=>{
                    blurCallback(e)
                    blurHandler(e)
                   }}
            />
            
        </div>
    )

}

export default InputPage

InputPage.prototype = {
    type: Prototypes.string,
    name: Prototypes.string,
    placeholder: Prototypes.string,
    inputClass: Prototypes.string,
    required: Prototypes.bool,
    autoComplete: Prototypes.string,
    ariaLabel: Prototypes.string,
    label: Prototypes.string
}

InputPage.defaultProps = {
    type: 'text',
    name: '',
    placeholder: '',
    inputClass: '',
    required: false,
    autoComplete: '',
    ariaLabel: '',
    label: '',
    changeCallback: ()=>{},
    blurCallback: ()=>{}
}

