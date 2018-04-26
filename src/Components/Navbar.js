import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slide: false
        }
        this.slideMenu = this.slideMenu.bind(this);
    }

    slideMenu() {
        this.setState({
            slide: !this.state.slide
        })
    }

    render() {
        return (
            <div>
                <div className="ham-pad">
                    <ul className="desktopNav">
                        <Link to="/dashboard"><li>Dashboard</li></Link>
                        <Link to="/accounts/checking-accounts"><li>Accounts</li></Link>
                        <Link to="/balance"><li>Balance</li></Link>
                    </ul>
                    <div onClick={this.slideMenu} className="ham-menu">
                        <div className={this.state.slide ? 'mobile-nav slide-menu' : 'mobile-nav'}>
                            <ul>
                                <Link to="/dashboard"><li>Dashboard</li></Link>
                                <Link to="/accounts"><li>Accounts</li></Link>
                                <Link to="/balance"><li>Balance</li></Link>
                                <li id="close-ham-menu">X Close</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}