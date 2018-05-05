import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInOut } from '../redux/reducer';
import { Icon, Button, Popup } from 'semantic-ui-react';
import '../App.css';

class Footer extends Component {

    constructor(){
        super()

        this.state = {
            loggedIn: false
        }
    }

    componentWillUnmount() {
        this.props.LOGIN_LOGOUT(false)
    }

    handleClick = (e) => {
        <Link to='/' />
    }

    render() {
        const logOutButton = <div className="right-footer">
            <Popup
                trigger={<Button color='red' content='Logout' />}
                content={<Button color='green' content='Confirm logout' onClick={(e) => this.handleClick()} />}
                on='click'
                position='top right'
            />
            </div>
        const homeButton = <Link to="/dashboard" className="left-footer"><Icon color="black" name="home" size="big" /></Link>
        return (
            <div>
                <footer className="footer-container">
                    <div className="footer-content">
                        {/* <Link to="/dashboard" className="left-footer"><Icon color="black" name="home" size="big" /></Link> */}
                        {window.location.hash === '#/' ? null : homeButton}
                        <div className="center"><p>CheckIt</p></div>
                        {window.location.hash === '#/' ? null : logOutButton}
                    </div>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { logInOut })(Footer)