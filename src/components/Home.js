import React, { Component } from 'react';
import Login from './auth/Login';
import Register from './auth/Register';

export default class Home extends Component {
    render(){
        return(
            <div>
                <h1>Home</h1>
                <Login/>
                <Register/>
            </div>
        )
    }
}