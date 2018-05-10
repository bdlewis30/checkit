import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    render() {
        return (
            <div className="">
                <h1>Dashboard</h1>
                <Link to='/accounts'><Button>Accounts</Button></Link>
            </div>
        )
    }
}