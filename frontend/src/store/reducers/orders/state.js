export const Loading = {
    LOADED: 'LOADED',
    ERROR: 'ERROR',
    NEVER: 'NEVER',
    LOADING: 'LOADING'
}


export const initialState = {
    orders: {},
    LoadingState: Loading.NEVER,
}