import { PhoneAction, PhoneState, PhoneActionTypes } from "../../types/phone"

const initialState: PhoneState = {
    phones: [
        {id: 1, name: "Apple iPhone 12", photo: "iPhone12.png", producer: "Apple", 
        year: 2020, diagonal: "6,1", country: "Китай", 
        memory: 128, hz: 60, NFC: false, ESIM: true, 
        wirelessCharging: true, price: 81990},

        {id: 2, name: "Xiaomi Mi 11 Lite", photo: "11lite.png", producer: "Xiaomi", 
        year: 2021, diagonal: "6,1", country: "Китай", 
        memory: 128, hz: 90, NFC: true, ESIM: true, 
        wirelessCharging: false, price: 27490},
    
        {id: 3, name: "Samsung Galaxy A72", photo: "A72.png", producer: "Samsung", 
        year: 2021, diagonal: "6,7", country: "Китай", 
        memory: 128, hz: 90, NFC: true, ESIM: false, 
        wirelessCharging: true, price: 32890},

        {id: 4, name: "Redmi note 10", photo: "iPhone12.png", producer: "Apple", 
        year: 2020, diagonal: "6,1", country: "Китай", 
        memory: 128, hz: 60, NFC: false, ESIM: true, 
        wirelessCharging: true, price: 81990},

        {id: 5, name: "Xiaomi 4", photo: "11lite.png", producer: "Xiaomi", 
        year: 2021, diagonal: "6,1", country: "Китай", 
        memory: 128, hz: 90, NFC: true, ESIM: true, 
        wirelessCharging: false, price: 27490},
    
        {id: 6, name: "Samsung Galaxy 12", photo: "A72.png", producer: "Samsung", 
        year: 2021, diagonal: "6,7", country: "Вьетнам", 
        memory: 128, hz: 90, NFC: true, ESIM: false, 
        wirelessCharging: true, price: 32890}
    ],
    pagination: 3
}

export const phoneReducer = (state = initialState, action: PhoneAction): PhoneState => {
    switch (action.type) {
        case PhoneActionTypes.PAGINATION:            
            return {phones: state.phones, pagination: action.payload}
        default: 
            return state
    }
}