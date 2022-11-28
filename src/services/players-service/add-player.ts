import { PlayerType } from '../../types/player';
import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { getToken } from '../../services/token';
import { shake } from '../../utils';

export const addPlayer = (    
    body: PlayerType,    
    onSuccess: (player: PlayerType) => void     
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.AddPlayer}`, {
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
            return response.json();
        } 
        throw new Error('error');
      })      
      .then((player) => onSuccess(player))
      .catch(() => shake())
}