import React, { Component } from 'react';
import '../App.css';
// import Navbar from './Navbar';
import Profile from './Profile';

export default class Header extends Component {

    constructor(){
        super();

        this.headingText = this.headingText.bind(this);
    }

    headingText(){
        if(window.location.hash === '#/accounts') {
            return 'Checking Accounts'
        } 
        else if(window.location.hash === '#/balance') {
            return 'Balance Sheet'
        }
        else return 'Dashboard'
    }

    render() {
        return (
            <div>
                <header>
                    {/* <Navbar /> */}
                    <Profile />
                    <h1>{this.headingText()}</h1>
                </header>
            </div>
        )
    }
}