import { PlayersType } from '../../types/player';
import { getToken } from '../../services/token';
import { BASIC_URL, PlayerAPIRoute } from '../../consts';

export const getPlayersList = (
    onSuccess: (players: PlayersType) => void, 
    onError: (value: boolean) => void
) => {    
    fetch(`${BASIC_URL}${PlayerAPIRoute.GetPlayersList}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${getToken()}`,
        }
    })
        .then((response) => {
        if (response.ok) {
            return response.json();
        } 
        throw new Error('error');
      })      
        .then((players) => onSuccess(players))
        .catch(() => {
            console.error('don\'t get players list');
            onError(true);
        })
}