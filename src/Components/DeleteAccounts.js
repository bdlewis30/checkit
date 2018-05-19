import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAccounts } from '../redux/reducer';
import { Confirm, Table } from 'semantic-ui-react'
import _ from 'lodash';
import axios from 'axios';

class DeleteAccounts extends Component {

    constructor() {
        super()

        this.state = {
            open: false
        }
        this.deleteAccount = this.deleteAccount.bind(this);
    }


    componentDidMount() {
        this.props.getAllAccounts()
    }

    deleteAccount(id) {
        axios.delete(`/api/accounts/${id}`).then(res => {
            this.handleConfirm()
        })
    }

    show = () => this.setState({ open: true })
    handleConfirm = () => {this.setState({ open: false })}
    handleCancel = () => this.setState({ open: false })

    render() {

        const list = _.map(this.props.accounts, (accounts, index) => {
            return <Table.Row key={accounts.id}>
                <Table.Cell onClick={this.show} >{accounts.account_name}</Table.Cell>
                <Confirm
                    open={this.state.open}
                    header='You are about to delete this account.'
                    content='This action cannot be undone. Are you sure?'
                    confirmButton="I'm sure"
                    onCancel={this.handleCancel}
                    onConfirm={this.deleteAccount}
                />
            </Table.Row>
        })

        return (
            <div className="accounts-list-container">
                <Table celled selectable>
                    <Table.Body>
                        {list}
                    </Table.Body>
                </Table>
            </div >
        )
    }

}

function mapStateToProps(state) {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, { getAllAccounts })(DeleteAccounts)