import { User } from '../../types/user';
import { TokenData } from '../token';
import { BASIC_URL, UserAPIRoute } from '../../consts';

export const userRegister = (   
    body: User,
    onSuccess: (data: TokenData) => void, 
    onError: () => void,
) => {    
    fetch(`${BASIC_URL}${UserAPIRoute.UserRegister}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {            
            return response.json();
        } 
        throw new Error('error');
      })      
      .then((token) => onSuccess(token))
      .catch(() => onError())
}