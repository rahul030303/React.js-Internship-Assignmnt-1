import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {Home} from './home';
import {Suspense} from 'react';


class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={user:""};
        this.uId = "";
        this.uPost= "";
        this.fetchUserData = this.fetchUserData.bind(this);
        
        // console.log(this.state.resource);
    }

    // componentDidMount(){
    //     const user =this.fetchUserData();
    // }
    
    handleClick=()=>{
        localStorage.removeItem('status');
        this.props.history.push('/');
    }

   fetchUserData=()=>{
        // console.log(resource);
return  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(response =>{
      console.log(response);
    this.setState({user:response});
    return response} );
}
  
// <Suspense fallback={<h1>Loading profile...</h1>}>
// <userDetails />
// </Suspense>

      
    render(){
        return(
            <div>
            <h1>Welcome to Dashboard Page</h1>
            <button onClick={this.handleClick}>Log out</button><br></br><br></br>
            <button onClick={this.fetchUserData}>Show users</button>

            <h1>{this.state.user.userId}</h1>
            <h1>{this.state.user.title}</h1>
            </div>
        )
    }
}

export default withRouter(Dashboard);


