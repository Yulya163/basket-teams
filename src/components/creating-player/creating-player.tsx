import { useState } from 'react';
import { addPlayer } from '../../services/players-service/add-player';
import './creating-player.css';

type InputTypeProps = {
    updatePlayersList: () => void;
}

function CreatingPlayer ({updatePlayersList}: InputTypeProps): JSX.Element {
    const [name, setName] = useState('');
    const [high, setHigh] = useState(false);     

    type FieldEvent = React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement, MouseEvent>;

    const handleInputTextChange = (evt: FieldEvent) => {
        setName(evt.target.value)
    }
    const handleCheckboxChange = () => {
        setHigh(prevStatus => !prevStatus);
    }    
    
    return ( 
        
        <form 
            className='create-player-form'            
            onSubmit={(evt) => {
                evt.preventDefault(); 
                window.scrollTo(0, 0);    
                addPlayer(
                    {name, high, active: true},
                    updatePlayersList
                );
                setName('');
                setHigh(false);                    
            }}>
            <input 
                className='input-name' 
                type='text' 
                name='name'
                value={name}
                onChange={(evt: FieldEvent) => {
                    handleInputTextChange(evt);
                }}
                placeholder='Enter new player name'  
                autoFocus              
            />
            <div className="btns-wrapper">
                <label className='label-checkbox label-checkbox-button'>
                    <input                     
                        type='checkbox'
                        className='high'
                        name='high'
                        value='high'
                        checked={high}   
                        onChange={() => handleCheckboxChange()}                 
                    />
                    <span className='label-span'></span>
                </label>                       
                <button 
                    className={name === '' ? 'btn add-btn disabled' : 'btn add-btn'}
                    type='submit' 
                    disabled={name === '' ? true : false}                                        
                >+</button>
            </div>
        </form>
           
    )
}
export default CreatingPlayer;