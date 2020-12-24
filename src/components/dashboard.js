import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {Home} from './home';
import {Suspense} from 'react';


class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            resource:""
        }
        console.log(this.state.resource);
    }

    handleClick=()=>{
        localStorage.removeItem('username');
        this.props.history.push('/');
    }

    fetchUserData(){
        // console.log(resource);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data =>this.setState({resource:data})
  );
<Suspense fallback={<h1>Loading profile...</h1>}>
<userDetails />
</Suspense>
}

    userDetails() {
        // Try to read user info, although it might not have loaded yet
        const user = this.state.resource;
        return <h1>{user.title}</h1>;
      }
      
    render(){
        return(
            <div>
            <h1>Welcome to Dashboard Page</h1>
            <button onClick={this.handleClick}>Log out</button><br></br><br></br>
            <button onClick={this.fetchUserData}>Show users</button>
            </div>
        )
    }
}

export default withRouter(Dashboard);


