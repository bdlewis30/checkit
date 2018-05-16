import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInOut } from '../redux/reducer';
import { Icon, Button, Popup } from 'semantic-ui-react';
import '../App.css';

class Footer extends Component {

    constructor(){
        super()

        this.state = {
           
        }
    }

    componentWillUnmount() {
        this.props.LOGIN_LOGOUT(false)
    }

    // handleClick = () => {
    //     // alert('You should be logging out, but probably not.')
    //     return <Link to='/' />
    // }

    render() {
        const logOutButton = <div className="right-footer">
            <Popup
                trigger={<Button color='red' content='Logout' />}
                content={<Link to='/'><Button color='green' content='Confirm logout' /></Link>}
                on='click'
                position='top right'
            />
            </div>
        const homeButton = <Link to="/dashboard" className="left-footer"><Icon color="black" name="home" size="big" /></Link>
        return (
            <div>
                <div className="space"></div>
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