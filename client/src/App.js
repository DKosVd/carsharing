import React from 'react';
import { Redirect, Route} from 'react-router-dom'; 
import About from './pages/About';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Notfound from './components/NotFound';

function App() {

  return (
    <div className="wrapper">
     
        <Route exact path='/main' component={MainPage}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contacts' component={Contacts}/>
        <Route exact path='/login' component={Login}/>
        <Redirect from='/' to='/main'></Redirect>
        {/* <Route path="/*" component={Notfound}/> */}
     
    </div>
  );
}

export default App;
