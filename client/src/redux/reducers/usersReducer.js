import { SET_USER} from "../types/usersTypes";

export const usersReducer = (state = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_USER:
            return payload;
    
        default:
            return state;
    }
}
