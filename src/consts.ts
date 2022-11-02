export const MAX_LOGIN_VALUE_LENGTH = 10;       
export const MIN_LOGIN_VALUE_LENGTH = 3;   

export const BASIC_URL = 'http://api.basket-team.q91711ta.beget.tech';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum PlayerAPIRoute {
    AddPlayer = '/v1/players/add-player',    
    GetPlayersList = '/v1/players/list',    
    DeletePlayer = '/v1/players/delete-player',    
    UpdatePlayer = '/v1/players/update-player',    
}

export enum UserAPIRoute {
    UserRegister = '/v1/users/register',
    UserName = '/v1/users/user-name',
}

export enum TeamAPIRoute {
    CreateTeam = '/v1/team/teams',
    TeamSize = '/v1/team/teams-sizes',
}