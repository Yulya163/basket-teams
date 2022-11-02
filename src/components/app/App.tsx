import Header from '../header/header';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Loading from '../../pages/loading/loading';
import { getToken } from '../../services/token';
import { useState, useEffect } from 'react';
import { AuthorizationStatus } from '../../consts';

import './App.css';

function App(): JSX.Element {

  const [authorizationStatus, setAuthorizationStatus] = useState(AuthorizationStatus.Unknown);  
    
  const token = getToken();  
  
  useEffect(() => {      
    if (token) {
      setAuthorizationStatus(AuthorizationStatus.Auth);       
    } else {
      setAuthorizationStatus(AuthorizationStatus.NoAuth)
    }      
  }, [token]);
    
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Loading />
    );
  }  
      
  return (
    <div className="App">
      <Header />
      {
        authorizationStatus === AuthorizationStatus.Auth ?
        <Main /> :
        <Login />
      }
    </div>
  );
}

export default App;
