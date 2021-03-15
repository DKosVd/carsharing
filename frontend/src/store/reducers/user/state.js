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

export const Register = {
    REGISTERING: 'REGISTERING',
    NEVER: 'NEVER',
    ERROR: 'ERROR',
    REGISTERED: 'REGISTERED'
}

export const Delete = {
    DELETING: 'DELETING',
    NEVER: 'NEVER',
    ERROR: 'ERROR',
    DELETED: 'DELETED'
}

const initialState = {
    user: {},
    LoadingState: Loading.NEVER, 
    UpdateStatus: Updating.NEVER,
    RegisterUser: Register.NEVER,
    DeleteUser: Delete.NEVER
}

export default initialState;