import { TeamsOption } from '../../types/team';
import { getToken } from '../../services/token';
import { BASIC_URL, TeamAPIRoute } from '../../consts';

export const getTeams = (
    body: TeamsOption | null,
    onSuccess: (teams: TeamsOption) => void
) => {    
    fetch(`${BASIC_URL}${TeamAPIRoute.CreateTeam}`, {
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
      .then((data) => onSuccess(data))
      .catch(() => console.log('don\'t get teams players'))
}