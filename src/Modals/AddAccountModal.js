import React, { Component } from 'react';
import { Button, Modal, Input, Label } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

export default class AddAccountModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openAccount: this.props.openAccount,
            newAccount: [],
            account_name: '',
            open_balance: 0,
            acct_num: 0
        }
        this.handleAccountName = this.handleAccountName.bind(this);
        this.handleOpenBalance = this.handleOpenBalance.bind(this);
        this.handleAcctNum = this.handleAcctNum.bind(this);
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

    showAccountModal = size => () => this.setState({ size, openAccount: true })
    closeAccountModal = () => this.setState({ openAccount: false })

    render() {
        const { openAccount, size } = this.state

        return (
            <div>
                <Modal size={size} open={openAccount} onClose={this.closAccountModal}>
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
                        <Button onClick={this.closeAccountModal} positive icon='checkmark' labelPosition='right' content='Submit' />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }

}