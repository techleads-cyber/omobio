import React, { Component } from 'react';  
import Routes from './Routes'; 
import {Route, Redirect} from 'react-router-dom'; 
import './css/Form.css';
import { FormErrors } from './FormErrors';
import Shops from './Login.js'; 
import FormSignUp from './FormSignUp.js'; 
//import fetch from 'isomorphic-fetch';



//  
const initialState = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''}, // validation 
    emailValid: false,
    passwordValid: false,
    formValid: false,
    showFormSignIn: true,
    signin: false    
};

class Form extends Component {
   
constructor (props) {
  super(props); 
  this.state = initialState;
  
}



 handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
        fieldValidationErrors.email = emailValid ? '' : '  format is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }



/* Create function
*/
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }


//function
LinkSignUP(e){
    // rendre les champs du form et d'erreurs vides 
    this.setState(initialState);
    this.setState({formErrors: {email: '', password: ''}});

    
    this.setState({showFormSignIn: !this.state.showFormSignIn}); 
    e.preventDefault();
  }




 
handleSubmit = (e) =>{
 
    e.preventDefault();
    
    let UserEmail = this.state.email ;
   
    let UserPassword = this.state.password ;

    console.log('processing',UserEmail);

 

    fetch('http://localhost/Login/controller/signin.php',{
        method: 'POST',
        credentials: 'include',   
        body: JSON.stringify({ 
          email: UserEmail, 
          password: UserPassword 
        })   
    }).then((response) => response.json())
        .then((responseJson) => {
 
        // If server response message same as Data Matched
            if(responseJson === 'Data Matched'){
   
              //Then open Profile activity and send user email to profile activity.
              //this.props.navigation.navigate('Second', { Email: UserEmail });
              //alert(responseJson);  
               
              this.setState({signin: true}); 
    
            }else {
   
              alert(responseJson);
              this.setState(initialState);

              //console.log(responseJson);
            }
   
        }).catch((error) => {
          console.log('not work');
          console.log(error);
          console.error(error);
        }); 
} 
  
 


// le formulaire de connexion à ajouter de la page App
// on peut pas envoyer le formulaire (le button est disabled ) que si le Form est valide  
//  
 render () {
 
  const showHide = {
      'display': this.state.showFormSignIn ? 'block' : 'none'
    };

   if (this.state.signin) {  
      return (   
              <div>
                    <Redirect to = {'/shops'} />
              </div>

      )
          
   }
   return ( 

    <div> 
     <h3> Sign In to  Get access to the shops. </h3>  
     <h5> not register yet <a onClick={this.LinkSignUP.bind(this)} href="#">Sign Up</a></h5>
        {!this.state.showFormSignIn &&  <FormSignUp />}    

    <div style={showHide}> 

        <form  className="demoForm" onSubmit={this.handleSubmit.bind(this)}>
         
            <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" 
                  name="email"
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.handleUserInput}  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleUserInput} />
        </div> 
          <button type="submit" name="signin" className="btn btn-primary" disabled={!this.state.formValid} > Sign In </button>  
        </form>  
    </div> 
    <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors} />
    </div>
    </div>

   )
 }
}
export default Form;

