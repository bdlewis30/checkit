import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllAccounts, getTransactions } from '../redux/reducer';
import _ from 'lodash';
import { Header, Button, Modal, Input, Label } from 'semantic-ui-react';
import Ledger from './Ledger';

class Transactions extends Component {

    constructor() {
        super()

        this.state = {
            openTransaction: false,
            date: '',
            desc: '',
            debit: 0,
            credit: 0,
            balance: 0
        }
        this.handleTransactionDate = this.handleTransactionDate.bind(this);
        this.handleTransactionDesc = this.handleTransactionDesc.bind(this);
        this.handleDebit = this.handleDebit.bind(this);
        this.handleCredit = this.handleCredit.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }

    componentDidMount() {
        this.props.getAllAccounts()
        this.props.getTransactions()
    }

    handleTransactionDate(value) {
        this.setState({
            date: value
        })
    }

    handleTransactionDesc(value) {
        this.setState({
            desc: value
        })
    }

    handleDebit(value) {
        this.setState({
            debit: value
        })
    }

    handleCredit(value) {
        this.setState({
            credit: value
        })
    }

    createAccount() {
        const body = {
            t_date: this.state.date,
            t_desc: this.state.desc,
            debits: this.state.debit,
            credits: this.state.credit,
            balance: this.state.balance
        };
        axios.post('/api/transactions', body)
            .then(res => {
                this.closeTransactionModal()
                this.props.getTransactions()
            }, error => {
                console.log(error)
            })
    }


    showTransactionModal = size => () => this.setState({ size, openTransaction: true })
    closeTransactionModal = () => this.setState({ openTransaction: false })

    render() {
        const options = _.map(this.props.accounts, (accounts, index) => {
            return <option key={accounts.id} value={accounts.id}>{accounts.account_name}</option>
        })

        const { openTransaction, size } = this.state
        const transactionModal = <Modal size={size} open={openTransaction} onClose={this.closeTransactionModal}>
            <Modal.Header>Add Transaction</Modal.Header>
            <Modal.Content>
                <Input placeholder='YYYY/DD/MM'>
                    <Label basic>Date:</Label>
                    <input onBlur={(e) => this.handleTransactionDate(e.target.value)} />
                </Input>
                <Input placeholder='Description'>
                    <Label basic>Desc:</Label>
                    <input onBlur={(e) => this.handleTransactionDesc(e.target.value)} />
                </Input>
                <Input placeholder='Debit'>
                    <Label basic>Debit:</Label>
                    <input onBlur={(e) => this.handleDebit(e.target.value)} />
                </Input>
                <Input placeholder='Credit'>
                    <Label basic>Credit:</Label>
                    <input onBlur={(e) => this.handleCredit(e.target.value)} />
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
                    <Button color='blue' onClick={this.showTransactionModal('tiny')}>Add Transaction +</Button>
                </div>
                <Ledger />
                {transactionModal}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, { getAllAccounts, getTransactions })(Transactions)