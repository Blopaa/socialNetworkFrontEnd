export interface authInitialState {
    token?: string;
}

export interface post {
    id?: number;
    message: string;
    profile: profile;
    isLiked?: boolean;
    own?: boolean;
}

export interface profile {
    id: number;
    nickname: string;
    description: string;
}

export type postInitialState = post[];