import { GET_PRODUCTS } from '../Actions/Actions_Types'

const initialState = {
    Products: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload
            }
        default:
            return state;
    }
}

export default Reducer