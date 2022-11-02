import './loading.css';

function Loading(): JSX.Element {
  return (
    <div className='loading'>      
      <p className='loading--text'>Loading ...</p>
      <div className='progress'>          
          <img src='img/logo200.png' className='logo loading--logo' alt='logo' />
      </div>
    </div>
  );
}

export default Loading;