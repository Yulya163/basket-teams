export const MAX_LOGIN_VALUE_LENGTH = 15;       
export const MIN_LOGIN_VALUE_LENGTH = 3;   

export const BASIC_URL = 'http://api.basket-teams.gorod-web.ru';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum PlayerAPIRoute {
    AddPlayer = '/api/players/add',    
    GetPlayersList = '/api/players/list',    
    DeletePlayer = '/api/players/delete',    
    UpdatePlayer = '/api/players/update',    
}

export enum UserAPIRoute {
    UserRegister = '/api/users/register', 
    UserAuth = '/api/users/token', 
    UserName = '/api/users/name'   
}

export enum TeamAPIRoute {
    GetTeam = '/api/teams/get-teams',
    TeamSize = '/api/teams/teams-size',
}