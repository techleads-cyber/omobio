import React from 'react';
import {Link} from 'react-router-dom';


class Shops extends React.Component {

	constructor (props) {
	  super(props);
	  this.state = {
	    isLogged: false
	  }
	}


	componentDidMount() {
		
		fetch('http://localhost/challenge/controller/Login.php',{
		    method: 'POST',
		    credentials: 'include',  
		    body: JSON.stringify({  

		    })   
		}).then((response) => response.json())
		    .then((responseJson) => {
		 
		       if(responseJson === 'Login succes')
		        {  
		            this.setState({isLogged: true});
		            alert(responseJson);  
		  
		        }
		        else{ 
		          alert(responseJson);   
		        }
		 
		    }).catch((error) => { 
		        console.error(error);
		});  
  	}

  
	//  
	render () { 

	 	if (!this.state.isLogged) {
	 		return (
	 			<div>
			    	<h3> You are not logged In </h3> 
			    	<h4> 
			    		To Login Sign in here <Link to="/signup">Sign in </Link> 
			    		or create a <Link to="/signup">new account</Link>
			    	</h4>  
			    </div>
			)
	 	}
	  	return (  
		    <div> 
	    		<Link to="/signout">Sign out </Link> 
		    	  
		    </div> 
		)
	}
			

}export default Shops;	 