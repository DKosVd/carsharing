import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingHOC = (Component) => {
    const WrapperContainer = ({ }) => {
        if (LoadingState === Loading.LOADING) {
            return (
                <div className="progress_circle">
                    <CircularProgress />
                </div>
            )
        }
        return <Component/>
    }
    return WrapperContainer
} 
