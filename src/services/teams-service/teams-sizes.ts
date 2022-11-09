import { TeamsOptions } from '../../types/team';
import { getToken } from '../../services/token';
import { BASIC_URL, TeamAPIRoute } from '../../consts';

export const getTeamsSizes = (
    onSuccess: (teamsSizes: TeamsOptions) => void, 
    onError: () => void
) => {    
    fetch(`${BASIC_URL}${TeamAPIRoute.TeamSize}`, {
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
      .then((data) => onSuccess(data))
      .catch(() => {
        console.log('don\'t get teams sizes');
        onError();
    })
}