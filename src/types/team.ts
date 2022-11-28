import { PlayersType } from './player';

export type TeamType = {
    activePlayers: PlayersType,
    reservePlayers: PlayersType,
    quantityActivePlayers: number,
    quantityReservePlayers: number,
    maxQuantityPlayers: number
}

export type TeamsType = TeamType[] & [];

export type TeamsOption = {
    teams: TeamsType | never[];
    totalQuantityPlayers?: number;
};

export type TeamsOptions = TeamsOption[] & [];
