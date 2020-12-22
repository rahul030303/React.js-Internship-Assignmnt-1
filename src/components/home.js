import {React,Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginComp from '../components/loginComp';

export default class Home extends Component{
    render(){
        return(
            <div>

            <h1>Welcome to Home Page</h1>


         
            <ul>
                <li>
                <Link  to="/home/login">Login </Link>
                </li>
            </ul>
            

         
      
            </div>

        )
    }
}