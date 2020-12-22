import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // console.log(Component);
  // console.log(rest);

const isAuth=localStorage.getItem('username')===null;


    if(isAuth){
      // console.log(this.props.history);
    return  <Redirect to="/home/login"></Redirect>
    }else{
      return (
        <Route {...rest} render={
          props => <Component  {...rest} {...props} />
        } />
      )

    }
     

}

export default ProtectedRoute;

