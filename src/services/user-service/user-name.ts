import { BASIC_URL, UserAPIRoute } from '../../consts';
import { getToken } from '../../services/token';

export const getUserName = async (    
    onSuccess: (userName: string) => void,
    onError: () => void,
) => {    
    await fetch(`${BASIC_URL}${UserAPIRoute.UserName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        }
    })
        .then((response) => {            
            if (response.ok) {
                return response.json();
            } 
            throw new Error('error');
      })      
        .then((userName) => {            
            onSuccess(userName.name);
    })
        .catch(() => onError())
}