import { User } from '../../types/user';
import { TokenData } from '../token';
import { BASIC_URL, UserAPIRoute } from '../../consts';
import { shake } from '../../utils';

export const userRegister = (   
    body: User,
    onSuccess: (data: TokenData) => void, 
    onError: (error: string) => void,
) => {    
    fetch(`${BASIC_URL}${UserAPIRoute.UserRegister}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',    
            'Accept': 'application/json',        
        },
        body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) { 
            console.log(response);           
            return response.json();
        } 
        return response.json().then(response => {            
            throw new Error(response.message)
        }) 
      })      
      .then((token) => onSuccess(token))
      .catch(error => {
        shake();
        onError(error.toString());
    })
}