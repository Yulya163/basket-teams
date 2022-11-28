import { TeamsOptions } from '../../types/team';
import { getToken } from '../../services/token';
import { BASIC_URL, TeamAPIRoute } from '../../consts';
import { shake } from '../../utils';

export const getTeamsSizes = (
    onSuccess: (teamsSizes: TeamsOptions) => void    
) => {    
    fetch(`${BASIC_URL}${TeamAPIRoute.TeamSize}`, {
        method: 'POST',
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
        .then((data) => onSuccess(data))
        .catch(() => shake())
}