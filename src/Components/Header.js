import React, { Component } from 'react';
import '../App.css';
import Profile from './Profile';
import { Icon } from 'semantic-ui-react';
import Menu from './Menu';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openMenu: false
        }
        this.headingText = this.headingText.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    // Menu closes when clicked outside menu box 
    // componentDidMount(){
    //     document.addEventListener('mousedown', this.handleClick, false);
    // }

    // componentWillUnmount(){
    //     document.removeEventListener('mousedown', this.handleClick, false);
    // }

    // handleClick = (e) => {
    //     if(this.node.contains(e.target)){
    //         return;
    //     }
    //     this.handleCloseMenu();
    // }
    //*********************** */

    handleOpenMenu(){
        this.setState({
            openMenu: true
        })
    }

    handleCloseMenu(){
        this.setState({
            openMenu: false
        })
    }

    headingText() {
        if (window.location.hash === '#/transactions') {
            return 'Transactions'
        }
        if (window.location.hash === '#/balance') {
            return 'Balance Sheet'
        }
        if (window.location.hash === '#/accounts/delete-account') {
            return 'Delete Accounts'
        }
        else return 'Dashboard'
    }
   

    render() {
        return (
            <div className="header-container" ref={node => this.node = node}>
                <header>
                    <div className="left-header">
                        <button className="ham-menu-button" onClick={(e) => this.handleOpenMenu()}><Icon color="black" name="bars" size="big" /></button>
                        {this.state.openMenu ? <Menu onClick={this.handleOpenMenu} action={this.handleCloseMenu}/> : null}
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