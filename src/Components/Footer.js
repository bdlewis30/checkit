import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logInOut} from '../reducer/reducer';
import { Icon } from 'semantic-ui-react';
import '../App.css';

class Footer extends Component {

    componentWillUnmount() {
        this.props.LOGIN_LOGOUT()
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <Link to="/dashboard" className="left"><Icon color="black" name="home" size="big" /></Link>
                    <div className="center">CheckIt</div>
                    <a href="/" className="right">Logout</a>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {logInOut})(Footer)