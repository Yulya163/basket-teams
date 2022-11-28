import { useEffect, useState } from 'react';
import { saveToken } from '../../services/token';
import { userRegister } from '../../services/user-service/user-register';
import { checkName } from '../../utils';

import eyeClose from './eye-close.png';
import eyeOpen from './eye-open.png';

function Register(): JSX.Element {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    type FieldEvent = React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement, MouseEvent>;

    const passwordField: HTMLInputElement | null = document.querySelector('.password');       
    const passwordImg: HTMLImageElement | null = document.querySelector('.pass-img'); 

    const handleInputName = (evt: FieldEvent) => {
        setName(evt.target.value);
    }

    const handleInputPassword = (evt: FieldEvent) => {
        setPassword(evt.target.value);
    }

    const handleInputEmail = (evt: FieldEvent) => {
        setEmail(evt.target.value);
    }

    const handleClickCheckbox = (evt: FieldEvent) => {
        setIsShowPassword(evt.target.checked);        
    }    

    const showMessage = (message: string) => {
        return (
          <h3 className='incorrect-message'>{message}</h3>
        )
    }

    useEffect(() => {
        if (isShowPassword) {          
            passwordField?.setAttribute('type', 'text');
            if(passwordImg !== null) {
                passwordImg.src = `${eyeOpen}`
            }        
        } else {
            passwordField?.setAttribute('type', 'password');
            if(passwordImg !== null) {
                passwordImg.src = `${eyeClose}`
            }                  
        }   
    }, [isShowPassword, passwordField, passwordImg]);

    return (
        <form className='form'>             
            <input 
                className='form--input name' 
                type='text'
                placeholder='Name*'
                value={name}                
                onInput={(evt: FieldEvent) => {
                    handleInputName(evt);
                    checkName(evt);
                }}                                  
            />
            <input 
                className={message ? 'form--input form--input-incorrect email' : 'form--input email'} 
                type='email'
                placeholder='Email*'
                value={email}                
                onInput={(evt: FieldEvent) => handleInputEmail(evt)}                                    
            />
            {
                message ? showMessage(message) : null
            }
            <div className='password-block'>
                <input 
                    className='form--input password'
                    type='password'
                    placeholder='Password*'
                    value={password}
                    onInput={handleInputPassword}                     
                />
                <label>
                    <input 
                        type='checkbox'
                        onChange={handleClickCheckbox}
                        checked={isShowPassword}
                    />
                    <img src={eyeClose} className='pass-img' alt='eye'/>
                </label>
            </div>           
            <button
                className='registr-btn shaked-element'
                onClick={(evt) => {
                    evt.preventDefault();                         
                    userRegister(                        
                        {name, password, email},
                        saveToken,
                        setMessage                     
                    )                
                }}
            >Register</button>           
        </form>   
    )
}

export default Register;
