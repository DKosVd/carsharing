import React from 'react';
import Admin from './App/Admin/Admin';
import { useSelector } from 'react-redux';
import  Client  from './App/Client/Client';

function App() {
  const { isAdmin } = useSelector(state => state.loginpage)

  return (
    <div className="wrapper">
        {isAdmin ? <Admin/> : <Client/>}
    </div>
  );
}

export default App;
