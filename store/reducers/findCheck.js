const initialState = {
    checkNumber: '',
    fiscalNumber: '',
    stringDate: '',
    stringTime: ''
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CHECK_NUMBER':
            return {
                ...state,
                checkNumber: action.payload
            }
        case 'CHANGE_FISCAL_NUMBER':
            return {
                ...state,
                fiscalNumber: action.payload
            }
        case 'CHANGE_CHECK_DATE':
            return {
                ...state,
                stringDate: action.payload
            }
        case 'CHANGE_CHECK_TIME':
            return {
                ...state,
                stringTime: action.payload
            }
        default:
            return state;

    }
}