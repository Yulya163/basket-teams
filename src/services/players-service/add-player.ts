import { PlayerType } from '../../types/player';
import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { getToken } from '../../services/token';

export const addPlayer = (    
    body: PlayerType,    
    onSuccess: (player: PlayerType) => void    
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.AddPlayer}`, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',   
            'Authorization': `Basic ${getToken()}`,         
        },
        body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {            
            return response.json();
        } 
        throw new Error('error');
      })      
      .then((player) => onSuccess(player))
      .catch(() => console.error('error delete'))
}