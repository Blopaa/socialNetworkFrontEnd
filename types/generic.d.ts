
export interface authInitialState {
    token?: string;
}

export interface post {
    id: number;
    message: string;
}

export type postInitialState = post[];