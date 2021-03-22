
export interface authInitialState {
    token?: string;
}

export interface post {
    id?: number;
    message: string;
    date: Date;
}

export type postInitialState = post[];