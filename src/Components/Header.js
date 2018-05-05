import React, { Component } from 'react';
import '../App.css';
// import Navbar from './Navbar';
import Profile from './Profile';
import { Icon } from 'semantic-ui-react';


export default class Header extends Component {

    constructor() {
        super();

        this.headingText = this.headingText.bind(this);
    }

    headingText() {
        if (window.location.hash === '#/accounts') {
            return 'Accounts'
        }
        else if (window.location.hash === '#/balance') {
            return 'Balance Sheet'
        }
        else return 'Dashboard'
    }

    render() {
        return (
            <div>
                <header>
                    <div className="left-header">
                        <Icon color="black" name="bars" size="big" />
                        {/* <Navbar /> */}
                        <h1>{this.headingText()}</h1>
                    </div>
                    <div className="right-header">
                        <Profile />
                    </div>
                </header>
            </div>
        )
    }
}