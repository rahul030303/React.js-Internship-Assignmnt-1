import React, {Component }from 'react';
//import { history } from 'react-router';
import axios from 'axios';
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
       this.state={
         userName:"",
         password:""
       };
       
    }

   handleSubmit(e){
      //  localStorage.setItem('username',this.state.user);
      //   console.log(this.state.user)
      // this.props.history.push('/dashboard');
      // // this.userId =this.state.user;
      // this.userId=  localStorage.getItem('username')
      e.preventDefault();
      // console.log(this.state)
      axios.post("http://stapi.wispa.me/api/Auth/login",this.state)
      .then(response=>{
        localStorage.setItem('status',response.status);
        console.log(response);
        if(response.status === 200){
          this.props.history.push('/dashboard');
        }
      })
      .catch(error=>{
        console.log(error);
        e.preventDefault();
        this.props.history.push('/home/login');
      })
    }

    handleChange(event){
       this.setState({[event.target.name]:event.target.value});
    }

    render(){

      const {userName, password} = this.state
        return (
        <div>
           <h1>Login To Continue</h1>
      <form onSubmit={this.handleSubmit}>
           <input type="text" name="userName" value={userName} placeholder="Enter email" onChange={ this.handleChange.bind(this)} >
           </input> <br></br>
           <br></br>
           <input type="password" name="password" value={password} placeholder="Enter password"  onChange={ this.handleChange.bind(this)}></input>
           <br></br><br></br>
          
          
           <button type="submit">login</button>
           </form>
        </div>)
    }
}


export default withRouter(LoginComp);


