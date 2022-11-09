import './loading.css';
import logo from './logo200.png';

function Loading(): JSX.Element {
  return (
    <div className='loading'>      
      <p className='loading--text'>Loading ...</p>
      <div className='progress'>          
          <img src={logo} className='logo loading--logo' alt='logo' />
      </div>
    </div>
  );
}

export default Loading;