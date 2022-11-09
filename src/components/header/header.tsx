import './header.css';
import logo from './logo200.png';

export default function Header() {
    return (        
        <div className="header">
            <img src={logo} className="logo header--logo" alt="logo" />
            <div className="header--title">Create basketball teams</div>
        </div>        
    )
}