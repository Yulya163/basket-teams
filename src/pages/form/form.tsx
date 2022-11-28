import { useState } from 'react';
import Register from '../../components/register/register';
import Login from '../../components/login/login';

import './form.css';

function Form(): JSX.Element { 

    const [isAuth, setIsAuth] = useState(true);
    const [isRegister, setIsRegister] = useState(false);

    return (   
        <div className='form-wrapper'>
            <ul className='title-tabs'>
                <li 
                    className={isAuth ? 'title-tabs--tab title-tabs--tab-active' : 'title-tabs--tab'}
                    onClick={() => {
                        setIsAuth(true);
                        setIsRegister(false);
                    }}
                >
                    Authorization
                </li>                
                <li 
                    className={isRegister ? 'title-tabs--tab title-tabs--tab-active' : 'title-tabs--tab'}
                    onClick={() => {
                        setIsAuth(false);
                        setIsRegister(true);
                    }}
                >
                    Registration
                </li>
            </ul>
            {
               !isAuth ? 
               <Register /> :
               <Login />
            }
        </div>         
              
    )
}

export default Form;