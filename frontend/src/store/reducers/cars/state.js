export const Loading = {
    LOADED: 'LOADED',
    ERROR: 'ERROR',
    NEVER: 'NEVER',
    LOADING: 'LOADING'
}

const initialState = {
    cars: [],
    LoadingState: Loading.NEVER, 
}

export default initialState;