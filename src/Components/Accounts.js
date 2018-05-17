import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllAccounts } from '../redux/reducer';
import _ from 'lodash';
import { Header, Button, Modal, Input, Label } from 'semantic-ui-react';
import Ledger from './Ledger';

class Accounts extends Component {

    constructor() {
        super()

        this.state = {
            openAccount: false,
            account_name: '',
            open_balance: 0,
            acct_num: 0
        }
        this.handleAccountName = this.handleAccountName.bind(this);
        this.handleOpenBalance = this.handleOpenBalance.bind(this);
        this.handleAcctNum = this.handleAcctNum.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }

    componentDidMount() {
        this.props.getAllAccounts()
    }

    handleAccountName(value) {
        this.setState({
            account_name: value
        })
    }

    handleOpenBalance(value) {
        this.setState({
            open_balance: value
        })
    }

    handleAcctNum(value) {
        this.setState({
            acct_num: value
        })
    }

    createAccount(){
        const body = {
            account_name: this.state.account_name,
            open_balance: this.state.open_balance,
            acct_num: this.state.acct_num
        };
        axios.post('/api/accounts', body)
        .then(res => {
            this.closeAccountModal()
            this.props.getAllAccounts()
        }, error => {
            console.log(error)
        })
    }

    showAccountModal = size => () => this.setState({ size, openAccount: true })
    closeAccountModal = () => this.setState({ openAccount: false })

    render() {
        const options = _.map(this.props.accounts, (accounts, index) => {
            return <option key={accounts.id} value={accounts.id}>{accounts.account_name}</option>
        })
        const { openAccount, size } = this.state
        const accountsModal = <Modal size={size} open={openAccount} onClose={this.closAccountModal}>
            <Modal.Header>Add Account</Modal.Header>
            <Modal.Content>
                <Input placeholder='Account Name'>
                    <Label basic>Account Name:</Label>
                    <input onBlur={(e) => this.handleAccountName(e.target.value)} />
                </Input>
                <Input placeholder='Amount'>
                    <Label basic>Open Balance $:</Label>
                    <input onBlur={(e) => this.handleOpenBalance(e.target.value)} />
                </Input>
                <Input placeholder='Last 4 digits'>
                    <Label basic>Account Number:</Label>
                    <input onBlur={(e) => this.handleAcctNum(e.target.value)} />
                </Input>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={this.closeAccountModal} negative>Cancel</Button>
                <Button onClick={this.createAccount} positive icon='checkmark' labelPosition='right' content='Submit' />
            </Modal.Actions>
        </Modal>

        return (
            <div className="">
                <Header as='h3' color='green' block>Current Balance: $200.00</Header>
                <div className="accounts-select-button">
                    <select className="account-dropdown">
                        <option value="0">Select Account</option>
                        {options}
                    </select>
                    <Button color='blue' onClick={this.showAccountModal('mini')}>Add Account +</Button>
                </div>
                <Ledger />
                {accountsModal}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, { getAllAccounts })(Accounts)