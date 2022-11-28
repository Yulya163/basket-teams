import { PlayersType, PlayerType } from '../../types/player';
import Player from '../player/player';
import './players.css';
import { deletePlayer } from '../../services/players-service/delete-player';

type PlayersProps = {
    players: PlayersType | never[];
    updatePlayersList: () => void;    
}

function Players({players, updatePlayersList}: PlayersProps): JSX.Element {  
    const availablePlayers = players.filter(player => player.active);

    const sortPlayers = players.sort((playerA: PlayerType, playerB: PlayerType) => {
        if (playerA && playerB && playerA.id && playerB.id) {
            return playerB.id - playerA.id
        } 
        return 0;      
    });

    const deleteAllPlayers = () => {        
        players.forEach((player: PlayerType) => {            
            if(player.id) {
                deletePlayer(
                player.id,
                updatePlayersList                
            )}         
        })
    }

    return (
        <div className='players shaked-element'>
            <div className='players--total'>
                Total available players: <span>{availablePlayers.length}</span>
            </div>
            <div className='players--list'>  
                {
                    availablePlayers.length < 3 && players.length !== 0 ?
                    <h4 className='incorrect-message'>To create teams, there must be at least 3 available players</h4> :
                    null
                }                
                {
                    availablePlayers.length > 20 ?
                    <h4 className='incorrect'>To create teams, there should be no more than 20 available players</h4> :
                    null
                }                
                {                    
                    players.length !== 0 ? 
                    sortPlayers.map((player: PlayerType) => (
                            <Player 
                                key={player.id} 
                                updatePlayersList={updatePlayersList}                                                                                            
                                player={player}
                            />
                        )
                    ) :
                    <h4>No players</h4>                
                }
            </div>
            <button
                className='delete-all-btn'
                onClick={(evt) => { 
                    evt.preventDefault();
                    alert('Do you want to remove all players?');
                    deleteAllPlayers();
                }}
            >
                Clear players list
            </button>     
        </div>
    )
}

export default Players;
