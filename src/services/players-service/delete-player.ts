import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { getToken } from '../../services/token';
import { shake } from '../../utils';

export const deletePlayer = (    
    body: number | undefined,    
    onSuccess: () => void    
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.DeletePlayer}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',   
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`,       
        },
        body: JSON.stringify({player_id: body}),
    })
        .then((response) => {
            if (response.ok) {            
                return response;
            } 
            throw new Error('error');
        })      
        .then(() => onSuccess())
        .catch(() => shake())
}