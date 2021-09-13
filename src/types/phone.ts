export interface PhoneState {
    phones: any[];
    pagination: number;
}

export interface Phone {
    id: number
    name: string;
    photo: string;
    producer: string;
    year: number;
    diagonal: string;
    country: string;
    memory: number;
    hz: number;
    NFC: boolean;
    ESIM: boolean;
    wirelessCharging: boolean;
    price: number;
}
export enum PhoneActionTypes {
    PAGINATION = 'PAGINATION'
}

interface FetchPhonePagination {
    type: PhoneActionTypes.PAGINATION;
    payload: number;
}

export type PhoneAction = FetchPhonePagination
