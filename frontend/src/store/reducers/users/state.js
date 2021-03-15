export const Loading = {
    LOADED: 'LOADED',
    ERROR: 'ERROR',
    NEVER: 'NEVER',
    LOADING: 'LOADING'
}

const initialState = {
    users: [],
    LoadingState: Loading.NEVER, 
}

export default initialState;