import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
import { getUserInfo } from '../reducer/reducer';
import '../App.css';

export class Profile extends Component {

    componenetDidMount() {
        this.props.getUserInfo()
    }

    render() {
        // if (!this.props.loggedIn) {
        //     return <Redirect to='/Login' />
        // }

        return (
            <div className="profile-container">
                <img className="profile-img" src={this.props.picture} alt="profile" />
                <div className="name">{this.props.username}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        picture: state.user.picture,
        username: state.user.displayName,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);