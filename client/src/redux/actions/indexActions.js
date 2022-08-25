import axios from 'axios';

export function getDoggo(){
    return async function(dispatch){
        var out = await axios("http://localhost:3001/dogs")
        return dispatch({
            type: 'LET_THE_DOGS',
            payload: out.data
        })
    }
}