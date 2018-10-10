import {NOTIFY_USER} from '../actions/Types'

const InitialState = {
    message : null,
    messageType: null,
}

export default function(state = InitialState, action){
    switch(action.type){
        case NOTIFY_USER:
        return {
            ...state,
            message: action.message,
            messageType: action.messageType,
        }
        default:
            return state;

    }
}