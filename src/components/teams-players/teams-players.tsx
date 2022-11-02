import { TeamsOption, TeamType } from '../../types/team'

import './teams-players.css';

type TeamsPlayersProps = {
    isShowTeamsPlayers: boolean;  
    teamsPlayers: TeamsOption | {teams: never[]};
    optionNumber: string;
}

function TeamsPlayers({isShowTeamsPlayers, teamsPlayers, optionNumber}: TeamsPlayersProps): JSX.Element | null {
    if(!isShowTeamsPlayers) {
        return null;        
    }
    return ( 
        <>
            <div className='teams-players-title'>Teams with players by option N {optionNumber}</div>
            <ul className="teams-players">
                {
                    teamsPlayers.teams.map((teamPlayer: TeamType, key) => ( 
                        <li className="team-players" key={key}>
                            <div className="group-name">Team N {key + 1}</div>
                            <ul>
                                {
                                    teamPlayer.activePlayers.map((player, key) => (
                                        <li key={key}>
                                            {player.name} {player.high ? <span className='high'></span> : null}
                                        </li>
                                    )) 
                                }
                                {
                                    teamPlayer.reservePlayers.map((player, key) => (
                                        <li className='reserve' key={key}>{player.name} (reserve)</li>
                                    )) 
                                }
                            </ul>                                                           
                        </li>                                
                    ))                       
                }
            </ul> 
        </>        
    )
}

export default TeamsPlayers;