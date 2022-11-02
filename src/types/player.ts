export type PlayerType = {
    id?: number;
    userId?: number;
    name: string;
    high: boolean;
    active: boolean;
};

export type PlayersType = PlayerType[] & [];
