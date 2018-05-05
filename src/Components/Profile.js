import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, logInOut } from '../redux/reducer';
import '../App.css';

class Profile extends Component {

    componentDidMount(auth_id) {
        this.props.getUserInfo()
    }
    
    render() {

        return (
            <div className="profile-container">
                <img className="profile-img" src={this.props.picture} alt="profile" />
                <div className="name">{this.props.name}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        picture: state.user.picture,
        name: state.user.name,
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);