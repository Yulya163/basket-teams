import { useState } from 'react';
import { PlayerType } from '../../types/player';
import { updatePlayer } from '../../services/players-service/update-player';
import { deletePlayer } from '../../services/players-service/delete-player';
import {shake} from '../../utils';

import './player.css';

type PlayerProps = {    
    key: number | undefined;   
    updatePlayersList: () => void ;
    player: PlayerType;
};

function Player({player, updatePlayersList}: PlayerProps): JSX.Element {
    const {name, high, active, id} = player;
    
    const [isActive, setIsActive] = useState(active);
    const [isHigh, setIsHigh] = useState(high);  

    const handleCheckboxChange = (cb: React.Dispatch<React.SetStateAction<boolean>>) => cb(prevStatus => !prevStatus);
    
    return (        
        <div className={isActive ? 'player' : 'player disabled'}>
            <label className='label-checkbox label-checkbox-switch'>
                <input                     
                    type='checkbox'
                    className='active'
                    name='active'
                    value='active'
                    checked={isActive} 
                    onChange={() => {
                        handleCheckboxChange(setIsActive);
                        updatePlayer(
                            {...player, active: !isActive},                            
                            updatePlayersList,
                            shake
                        );
                    }}                     
                />  
                <span className='label-span'>{name}</span>                           
            </label>

            <div className='btns-wrapper'>
                <label className='label-checkbox label-checkbox-button'>   
                    <input                     
                        type='checkbox'
                        className='high'
                        name='high'
                        value='high'
                        checked={isHigh} 
                        onChange={() => {
                            handleCheckboxChange(setIsHigh);
                            updatePlayer(                               
                                {...player, high: !isHigh},
                                updatePlayersList,
                                shake
                            );
                        }}                     
                    />                          
                    <span 
                        className='label-span'                        
                    ></span>                
                </label>
                <button 
                    className='btn delete-btn shaked-element'
                    onClick={() => deletePlayer(
                        id,
                        updatePlayersList,
                        shake
                    )}
                >X</button>
            </div>               
           
                           
        </div>
    )    
}

export default Player;
