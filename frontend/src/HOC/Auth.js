import React from 'react'
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Auth = Component  => {
    const WrapperComponent = ({path, LoadingStatus, status, preloader}) => {
        if (status === LoadingStatus) {
            return <Redirect to={path}/>
        }
    
        if (!(status === LoadingStatus) && !(status === preloader)) {
            return (
                <div className="progress_circle">
                    <CircularProgress />
                </div>
            )
        }
        return <Component/>
    }
    return WrapperComponent
}

export default Auth