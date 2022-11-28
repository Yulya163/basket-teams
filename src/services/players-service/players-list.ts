import { PlayersType } from '../../types/player';
import { getToken } from '../../services/token';
import { BASIC_URL, PlayerAPIRoute } from '../../consts';
import { shake } from '../../utils';

export const getPlayersList = (
    onSuccess: (players: PlayersType) => void, 
    onError: (error: string) => void
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.GetPlayersList}`, {
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
        return response.json().then(response => {            
            throw new Error(response.message)
        });
      })      
        .then((players) => onSuccess(players))
        .catch(error => {
            shake();
            onError(error.toString());
        })
}