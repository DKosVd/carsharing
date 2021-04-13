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

export const initialState = {
    order: {},
    manager: {},
    LoadingState: Loading.NEVER,
    UpdateStatus: Updating.NEVER
}