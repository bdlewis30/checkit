import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    render() {
        return (
            <div className="">
                <Link to='/transactions'><Button>Transactions</Button></Link>
                <Link to='/accounts/delete-account'><Button>Delete Account</Button></Link>
            </div>
        )
    }
}