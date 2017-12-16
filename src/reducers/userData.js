/*
Reducer to store the user data in the app state
 */
export function userData(state = {}, action) {


    switch (action.type) {

        //if action de type set user => add user to the state
        case 'SET_USER_DATA':

            return  {...state, user : action.user }

        //if no action return current app state
        default:
            return state;
    }

}