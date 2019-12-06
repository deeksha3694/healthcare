import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Userdetails from './userdetails';


class Main extends Component {
    render() {
        return ( 
            <div>
               <Route path="/userdetails" component={Userdetails} />
               
            </div>
        )
    }
}
//Export The Main Component
export default Main;