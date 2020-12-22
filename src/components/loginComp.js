import {React, Component }from 'react';
//import { history } from 'react-router';
import { withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
class LoginComp extends Component{

    constructor(props){
        super(props)
        //console.log(this.props.history)
      // const history= props.history

       this.handleSubmit = this.handleSubmit.bind(this);
      // this.handleChange = this.handleChange.bind(this);
       this.state={ user:""};
       this.state={ userId:""};
    }

   handleSubmit(){
       localStorage.setItem('username',this.state.user);
        console.log(this.state.user)
      this.props.history.push('/dashboard');
        // this.userId =this.state.user;
      this.userId=  localStorage.getItem('username')
    }

    handleChange(event){
       this.setState({user:event.target.value});
        console.log(event);
    }


    
    render(){
        return (
        <div>
           <h1>Login To Continue</h1>
      
           <input type="text" name="user"   placeholder="Enter email" onChange={ this.handleChange.bind(this)} >
           </input> <br></br>
           <br></br>
           <input type="password" placeholder="Enter  password"></input>
           <br></br><br></br>
          
         
           <button onClick={this.handleSubmit} >login</button>
        </div>)
    }
}


export default withRouter(LoginComp);