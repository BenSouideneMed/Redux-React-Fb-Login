/*
    action file export the actions we need in the app
 */
export function setUserData(user) {

    return {
        type: 'SET_USER_DATA',
        user
    };
}

export function dislayUserData() {
    return {
        type: 'DISPLAY_USER_DATA',
    };
}