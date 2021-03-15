export const Loading = {
    LOADED: 'LOADED',
    ERROR: 'ERROR',
    NEVER: 'NEVER',
    LOADING: 'LOADING'
}

export const Updating = {
    UPDATED: 'UPDATED',
    ERROR: 'ERROR',
    NEVER: 'NEVER',
    UPDATING: 'UPDATING'
}

const initialState = {
    car: {},
    LoadingState: Loading.NEVER, 
    UpdateStatus: Updating.NEVER
}

export default initialState;