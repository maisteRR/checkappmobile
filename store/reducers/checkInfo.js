const initialState = {
    isValid: false,
    cashier: '',
    checkout: '',
    checksum: '',
    checktax: '',
    products: []
}
 export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_CASHIER':
            return {
                ...state,
                cashier: action.payload
            }
        case 'ADD_CHECKOUT':
            return {
                ...state,
                checkout: action.payload
            }
        case 'ADD_CHECKSUM':
            return {
                ...state,
                checksum: action.payload
            }
        case 'ADD_CHECKTAX':
            return {
                ...state,
                checktax: action.payload
            }
        default:
            return state;

    }
}