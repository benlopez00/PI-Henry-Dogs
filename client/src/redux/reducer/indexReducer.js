const initialState = {
    dogs : []
}

function rootReducer (state=initialState, action){
    switch(action.type){
        case 'LET_THE_DOGS':
            return{
                ...state,
                dogs: action.payload
            }
            default:
                return state;
    }
}

export default rootReducer;