import { PlayerType } from '../../types/player';
import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { getToken } from '../../services/token';
import { shake } from '../../utils';

export const updatePlayer = (
    body: PlayerType, 
    onSuccess: () => void    
    ) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.UpdatePlayer}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',     
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`,          
        },
        body: JSON.stringify(body),
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