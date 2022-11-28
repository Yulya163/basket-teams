import { User } from '../../types/user';
import { TokenData } from '../token';
import { BASIC_URL, UserAPIRoute } from '../../consts';
import {Buffer} from 'buffer';
import { shake } from '../../utils';

export const userAuth = (   
    user: User,
    onSuccess: (data: TokenData) => void, 
    onError: (error: string) => void,
) => {   
    const string = Buffer.from(`${user.email}:${user.password}`).toString('base64');    
    fetch(`${BASIC_URL}${UserAPIRoute.UserAuth}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Basic ${string}`,          
        }        
    })
      .then((response) => {
        if (response.ok) {                 
            return response.json();
        }         
        return response.json().then(response => {            
            throw new Error(response.message)
        });     
      })      
      .then((token) => onSuccess(token))
      .catch(error => {
        shake();
        onError(error.toString());
    })
}