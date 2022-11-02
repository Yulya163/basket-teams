import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { getToken } from '../../services/token';

export const deletePlayer = (    
    body: number | undefined,    
    onSuccess: () => void    
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.DeletePlayer}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',   
            'Authorization': `Basic ${getToken()}`,       
        },
        body: JSON.stringify({id: body}),
    })
        .then((response) => {
            if (response.ok) {            
                return response;
            } 
            throw new Error('error');
        })      
        .then(() => onSuccess())
        .catch(() => console.error('error delete'))
}