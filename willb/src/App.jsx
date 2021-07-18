import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import {Switch , Route,Redirect} from 'react-router-dom';
import Profile from './pages/Profile';
import Moodpage from './pages/Moodpage';
import Claimpage from './pages/Claimpage';
import Preference from './pages/Preference';
import Track from './pages/Track';
import Result from './pages/Result';



const App=()=>{
    return(
        <>
        
        <Switch>
         <Route exact path="/" component ={Home}  />
         <Route exact path="/about" component ={About}  />
         <Route exact path="/contact" component ={Contact}  />
         <Route exact path="/register" component ={Register}  />
         <Route exact path="/profile" component ={Profile}  />
         <Route exact path="/moodpage" component ={Moodpage}  />
         <Route exact path="/claimpage" component ={Claimpage}  />
         <Route exact path="/preference" component ={Preference}  />
         <Route exact path="/track" component ={Track}  />
         <Route exact path="/result" component ={Result}  />

         <Redirect to="/" />
       </Switch>
        </>
    )
}

export default App;  