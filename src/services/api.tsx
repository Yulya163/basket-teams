import {TokenData} from './token';

export const sendData = (
    url: string,
    onSuccess: (data: TokenData) => void, 
    onError: () => void, 
    body: object) => {    
    fetch(url, {
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {            
            return response.json();
        } 
        throw new Error(`${response.status} - ${response.statusText}`);
      })      
      .then((data) => onSuccess(data))
      .catch((err) => onError())
}

export const getData = (
    url: string,
    onSuccess: (data: object[]) => void, 
    onError: () => void,     
    token: string,     
    ) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
      .then((response) => {
        if (response.ok) {
            return response.json();
        } 
        throw new Error(`${response.status} - ${response.statusText}`);
      })      
      .then((players) => onSuccess(players))
      .catch((err) => onError())
}