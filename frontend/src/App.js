import React from 'react';
import Admin from './Pages/AdminPage/AdminPage';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Adminsignin from './Pages/AdminSignIn/AdminSignIn';
import { authMe } from './store/actions/currentUser/currentUser';
import Auth from './HOC/Auth';
import { Loading } from './store/reducers/currentUser/state';
const AdminWithLoading = Auth(Admin);
const AdminSignInWithLoading = Auth(Adminsignin);

function App() {
  const status = useSelector(state => state.currentUser.LoadingState)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(authMe());
  }, [])
  return (
    <>
      <Switch>
        <Route path="/admin" render={() => <AdminWithLoading
          path={'/signin'}
          LoadingStatus={Loading.ERROR}
          status={status}
          preloader={Loading.LOADED}
        />}
        />
        <Route path="/signin" component={() => <AdminSignInWithLoading
          path={'/admin'}
          LoadingStatus={Loading.LOADED}
          status={status}
          preloader={Loading.ERROR}
        />} />
      </Switch>
    </>
  );
}

export default App;
