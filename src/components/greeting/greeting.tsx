import {dropToken} from '../../services/token';
import './greeting.css';

type GreetingProps = {
    userName: string;
}

export default function Greeting({userName}: GreetingProps) {
    
    return (
        <div className="greeting">
            <div className="greeting--title">Hello, {userName} !</div>
            <div 
                className="exit-btn" 
                onClick={dropToken}               
            >
            Exit
            </div>           
        </div>
    )
}