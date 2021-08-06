import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


import FormSignIn from './FormSignIn.js'; 
import FormSignUp from './FormSignUp.js'; 
import NotFound from './NotFound';
import Main from './Main';  
import Shops from './Login';
import SignOut from './SignOut.js'; 
  



class Routes extends Component {
  render() {
    return (
      	<Switch>    
			<Route  exact path="/" component={Main} />  
			<Route  path="/signin" component={FormSignIn} /> 
			<Route  path="/login" component={Shops} />
			<Route  path="/signup" component={FormSignUp} />
			<Route  path="/signout" component={SignOut} />
			<Route   component={NotFound} /> 
      </Switch>
    );
  }
}    
export default Routes;
  

  
