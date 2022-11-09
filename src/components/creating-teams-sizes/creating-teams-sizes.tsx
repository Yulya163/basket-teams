import { useState } from 'react';
import { getTeamsSizes } from '../../services/teams-service/teams-sizes';
import { getTeams } from '../../services/teams-service/teams';
import { TeamType, TeamsOption } from '../../types/team';
import { PlayersType } from '../../types/player';
import {shake} from '../../utils';

import './creating-teams-sizes.css';

type CreatingTeamsSizesProps = {
    players: PlayersType | never[];  
    isShowTeamsBlock: boolean;  
    isShowTeamsPlayers: boolean;  
    setIsShowTeamsBlock: React.Dispatch<React.SetStateAction<boolean>>;  
    setIsShowTeamsPlayers: React.Dispatch<React.SetStateAction<boolean>>;  
    setTeamsPlayers:  React.Dispatch<React.SetStateAction<{teams: never[];}>>;
    setOptionNumber: React.Dispatch<React.SetStateAction<string>>;
}

function CreatingTeamsSizes(props: CreatingTeamsSizesProps): JSX.Element {
    const {
        players, 
        isShowTeamsBlock, 
        isShowTeamsPlayers, 
        setIsShowTeamsBlock, 
        setIsShowTeamsPlayers, 
        setTeamsPlayers, 
        setOptionNumber
    } = props;
    const [teamsSizes, setTeamsSizes] = useState([]); 

    const availablePlayers = players.filter(player => player.active);

    const isDisabled = () => availablePlayers.length < 3 || availablePlayers.length > 20;  
    
    const mainHeight = document.querySelector('.main')?.clientHeight;      

    return (
        <div className='teams-sizes'>
            <button 
                className={isDisabled() ? 'start-create-btn shaked-element disabled' : 'start-create-btn shaked-btn' }
                disabled={isDisabled() ? true : false }
                onClick={() => {
                    setTimeout(() => {
                        window.scrollTo(0, mainHeight || 9999)
                    }, 1000);  
                    getTeamsSizes(
                        setTeamsSizes,
                        shake
                    )
                    setIsShowTeamsBlock(true);                 
                }}
            >
                Create teams
            </button> 
            {
                isShowTeamsBlock ?                 
                <ul className="options">
                    {
                        teamsSizes.map(({teams}: TeamsOption, key) => (
                            
                            <li className='option' key={key}>
                                <div className="group-name">
                                    Option N {key + 1}
                                </div>
                                <ul>
                                    {
                                        teams.map(({quantityActivePlayers, quantityReservePlayers}: TeamType, TeamsKey) => (
                                            <li  key={TeamsKey}>
                                                {TeamsKey + 1} {quantityActivePlayers} active {quantityReservePlayers !== 0 ? `(${quantityReservePlayers} in reserve)` : null}
                                            </li>
                                        ))
                                    }                            
                                </ul>
                                <button 
                                    className='choose-btn'
                                    onClick={() => {  
                                        setTimeout(() => {
                                            window.scrollTo(0, mainHeight || 9999)
                                        }, 1000);                                           
                                        getTeams(
                                            {teams},
                                            setTeamsPlayers 
                                        );  
                                        setIsShowTeamsPlayers(true);
                                        setOptionNumber(String(key + 1));                                                                                
                                    }}
                                >
                                    {!isShowTeamsPlayers ? 'Choose' : 'Refresh players'}
                                </button>
                            </li>                            
                        ))
                    }  
                </ul> :
                null                         
            }            
        </div>
    )
}

export default CreatingTeamsSizes;