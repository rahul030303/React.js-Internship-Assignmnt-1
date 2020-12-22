import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import {Home} from './home';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props)
    }

    
    handleClick=()=>{
        localStorage.removeItem('username');
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            <h1>Welcome to Dashboard Page</h1>
            <button onClick={this.handleClick}>Log out</button>
            </div>
        )
    }
}

export default withRouter(Dashboard);