import { useEffect, useState } from 'react';
import { MIN_LOGIN_VALUE_LENGTH, MAX_LOGIN_VALUE_LENGTH } from '../../consts';
import { userRegister } from '../../services/user-service/user-register';
import { saveToken } from '../../services/token';
import './login.css';

function Login(): JSX.Element {   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    type FieldEvent = React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement, MouseEvent>;

    const passwordField: HTMLInputElement | null = document.querySelector('.password');       
    const passwordImg: HTMLImageElement | null = document.querySelector('.pass-img'); 

    useEffect(() => {
        if (isShowPassword) {          
            passwordField?.setAttribute('type', 'text');
            if(passwordImg !== null) {
                passwordImg.src = 'img/eye-open.png'
            }        
        } else {
            passwordField?.setAttribute('type', 'password');
            if(passwordImg !== null) {
                passwordImg.src = 'img/eye-close.png'
            }                  
        }   
    }, [isShowPassword])

    const checkLogin = (evt: FieldEvent) => {  
        const valueLength = evt.target.value.length;

        if (valueLength < MIN_LOGIN_VALUE_LENGTH) {            
            evt.target.setCustomValidity(`add ${MIN_LOGIN_VALUE_LENGTH - valueLength} characters`)
        } else if (valueLength > MAX_LOGIN_VALUE_LENGTH) {            
            evt.target.setCustomValidity(`extra ${valueLength - MAX_LOGIN_VALUE_LENGTH} characters`)
        } else {
            evt.target.setCustomValidity('')
        }
        evt.target.reportValidity();        
    }

    const handleInputUsername = (evt: FieldEvent) => {
        setUsername(evt.target.value);
    }

    const handleInputPassword = (evt: FieldEvent) => {
        setPassword(evt.target.value);
    }

    const handleClickCheckbox = (evt: FieldEvent) => {
        setIsShowPassword(evt.target.checked);        
    }    

    const showMessage = (message: string) => {
        return (
          <h3 className='incorrect'>{message}</h3>
        )
    }

    return (            
        <form className='login-block auth' noValidate aria-live='polite'> 
            <h3 className='title'>Registration</h3>
            <input 
                className={message ? 'name name-red' : 'name'} 
                type='text'
                placeholder='Login'
                value={username}                
                onInput={(evt: FieldEvent) => {
                    handleInputUsername(evt);
                    checkLogin(evt);
                }}                   
            />
            {
                message ? showMessage(message) : null
            }
            <div className='password-block'>
                <input 
                    className='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onInput={handleInputPassword}
                />
                <label>
                    <input 
                        type='checkbox'
                        onChange={handleClickCheckbox}
                        checked={isShowPassword}
                    />
                    <img src='img/eye-close.png' className='pass-img' alt='eye-close'/>
                </label>
            </div>           
            <button
                className='login-btn'
                onClick={(evt) => {
                    evt.preventDefault();                         
                    userRegister(                        
                        {username, password},
                        saveToken,
                        () => setMessage('Sorry, this name is already registered'),                        
                    )                
                }}
            >Register</button>           
        </form>          
    )
}

export default Login;