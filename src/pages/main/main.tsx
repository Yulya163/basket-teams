import { useState, useEffect } from 'react';
import { getPlayersList } from '../../services/players-service/players-list';
import { getUserName } from '../../services/user-service/user-name';
import Error from '../../components/error/error';
import Greeting from '../../components/greeting/greeting';
import CreatingPlayer from '../../components/creating-player/creating-player';
import Players from '../../components/players/players';
import CreatingTeamsSizes from '../../components/creating-teams-sizes/creating-teams-sizes';
import TeamsPlayers from '../../components/teams-players/teams-players';
import Loading from '../../pages/loading/loading';

import './main.css';

function Main(): JSX.Element {
    const [userName, setUserName] = useState('buddy');
    const [players, setPlayers] = useState([]); 
    const [isDataLoaded, setIsDataLoaded] = useState(true);
    const [errMessage, setErrMessage] = useState('');      
    const [isShowTeamsBlock, setIsShowTeamsBlock] = useState(false);    
    const [isShowTeamsPlayers, setIsShowTeamsPlayers] = useState(false);  
    const [teamsPlayers, setTeamsPlayers] = useState({teams: []});  
    const [optionNumber, setOptionNumber] = useState(''); 

    const init = async () => {        
        await getUserName(            
            setUserName,        
            () => setUserName('buddy')
        );
        await getPlayersList(
            setPlayers,
            setErrMessage
        );         
        await setIsDataLoaded(false);
    }

    useEffect(() => {    
        init();
    }, [userName]);  

    const updatePlayersList = () => {
        getPlayersList(
            setPlayers,
            setErrMessage
        );    
        setIsShowTeamsBlock(false);  
        setIsShowTeamsPlayers(false);  
    } 
    
    return (  
        <main className='main'>
            <Greeting userName={userName}/>            
            {
                !isDataLoaded ?                 
                    errMessage === '' ?
                    <>
                        <CreatingPlayer 
                            updatePlayersList={updatePlayersList}
                        />
                        <Players 
                            players={players}
                            updatePlayersList={updatePlayersList}
                        />
                        <CreatingTeamsSizes 
                            players={players}
                            isShowTeamsBlock={isShowTeamsBlock}
                            isShowTeamsPlayers={isShowTeamsPlayers}
                            setIsShowTeamsBlock={setIsShowTeamsBlock}
                            setIsShowTeamsPlayers={setIsShowTeamsPlayers}
                            setTeamsPlayers={setTeamsPlayers}
                            setOptionNumber={setOptionNumber}
                        />
                        <TeamsPlayers 
                            isShowTeamsPlayers={isShowTeamsPlayers}
                            teamsPlayers={teamsPlayers}
                            optionNumber={optionNumber}
                        />
                    </> :
                    <Error errMessage={errMessage}/> : 
                <Loading />
            }    
        </main> 
    )
}

export default Main;