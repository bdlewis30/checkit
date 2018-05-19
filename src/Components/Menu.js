import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Menu, Button, Modal, Input, Label, Icon } from 'semantic-ui-react';
import '../App.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

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

    createAccount() {
        const body = {
            account_name: this.state.account_name,
            open_balance: this.state.open_balance,
            acct_num: this.state.acct_num
        };
        axios.post('/api/accounts', body)
            .then(res => {
                this.closeAccountModal()
            }, error => {
                console.log(error)
            })
    }

    showAccountModal = size => () => this.setState({ size, openAccount: true })
    closeAccountModal = () => this.setState({ openAccount: false })

    render() {
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
            <div className="menu-dropdown">
                <Menu vertical onClick={(e) => this.props.action()} >
                    <Link to='/dashboard' className="link"><Menu.Item name='Dashboard' >
                        <Icon name='home' />Dashboard
                    </Menu.Item></Link>

                    <Menu.Item name='Accounts' header >
                        Accounts
                    </Menu.Item>

                    <Menu.Item name='Add-Account' onClick={this.showAccountModal('tiny')} >
                        <Icon name='add' />Add Account
                    </Menu.Item>

                   <Link to='/accounts/delete-account' className="link"><Menu.Item name='Delete-Account'>
                        <Icon name='delete' color='red' />Delete Account
                    </Menu.Item></Link>

                    <Menu.Item name='Accounts' header >
                        Transactions
                    </Menu.Item>

                    <Menu.Item name='Add-Transaction' onClick={this.showAccountModal('tiny')}>
                        <Icon name='add' />Add Transaction
                    </Menu.Item>

                    <Menu.Item name='Delete-Transaction' >
                        <Icon name='delete' color='red' />Delete Transaction
                    </Menu.Item>

                    <Menu.Item name='Close-Menu' >
                        <Icon name='window close' />Close
                    </Menu.Item>
                </Menu>
                {accountsModal}
            </div>
        )
    }
}