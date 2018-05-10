import React, { Component } from 'react';
import { Table, Header, Button, Modal, Input, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllAccounts, getTransactions } from '../redux/reducer';
import _ from 'lodash';

class Accounts extends Component {

    constructor() {
        super()

        this.state = {
            openMoney: false,
            openDate: false,
            openTransaction: false
        }
    }

    componentDidMount() {
        this.props.getAllAccounts()
        this.props.getTransactions()
    }

    showMoneyModal = size => () => this.setState({ size, openMoney: true })
    showDateModal = size => () => this.setState({size, openDate: true})
    showTransactionModal = size => () => this.setState({size, openTransaction: true})
    closeMoneyModal = () => this.setState({ openMoney: false })
    closeDateModal = () => this.setState({ openDate: false })
    closeTransactionModal = () => this.setState({ openTransaction: false })

    render() {
        const options = _.map(this.props.accounts, (accounts, index) => {
            return <option key={accounts.id} value={accounts.id}>{accounts.account_name}</option>
        })

        const transactions = _.map(this.props.transactions, (transactions, index) => {
            return 
        })

        const { openMoney, openDate, openTransaction, size } = this.state
        const moneyModal = <Modal size={size} open={openMoney} onClose={this.closeMoneyModal}>
            <Modal.Header>
                Update Transaction
            </Modal.Header>
            <Modal.Content>
                <Input placeholder='Amount'>
                    <Label basic>$</Label>
                    <input />
                </Input>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={this.closeMoneyModal} negative>Cancel</Button>
                <Button onClick={this.closeMoneyModal} positive icon='checkmark' labelPosition='right' content='Update' />
            </Modal.Actions>
            </Modal>

        const dateModal = <Modal size={size} open={openDate} onClose={this.closeDateModal}>
            <Modal.Header>
                Update Transaction
            </Modal.Header>
            <Modal.Content>
                <Input placeholder='dd/mm/yyyy'>
                    <Label basic>Date</Label>
                    <input />
                </Input>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={this.closeDateModal} negative>Cancel</Button>
                <Button onClick={this.closeDateModal} positive icon='checkmark' labelPosition='right' content='Update' />
            </Modal.Actions>
            </Modal>

        const transactionModal = <Modal size={size} open={openTransaction} onClose={this.closeTransactionModal}>
            <Modal.Header>
                Update Transaction
            </Modal.Header>
            <Modal.Content>
                <Input placeholder='Description...'>
                    <Label basic>Transaction</Label>
                    <input />
                </Input>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={this.closeTransactionModal} negative>Cancel</Button>
                <Button onClick={this.closeTransactionModal} positive icon='checkmark' labelPosition='right' content='Update' />
            </Modal.Actions>
        </Modal>

        return (
            <div className="">
                <Header as='h3' color='green' block>Current Balance: $200.00</Header>
                <section>
                    <select className="account-dropdown">
                        <option value="0">--Select An Account--</option>
                        {options}
                    </select>
                </section>
                <Table celled size='small' columns={5} selectable>
                    <Table.Header fullWidth className="table-header">
                        <Table.Row className="table-header">
                            <Table.HeaderCell className="table-header">Transaction</Table.HeaderCell>
                            <Table.HeaderCell className="table-header">Date</Table.HeaderCell>
                            <Table.HeaderCell className="table-header">Debit</Table.HeaderCell>
                            <Table.HeaderCell className="table-header">Credit</Table.HeaderCell>
                            <Table.HeaderCell className="table-header">Balance</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell >Beginning Balance</Table.Cell>
                            <Table.Cell ></Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell >$100.00</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable onClick={this.showTransactionModal('mini')}>Burger King Wopper</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/7/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>4.95</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell >$95.05</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable onClick={this.showTransactionModal('mini')}>Deposit</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/8/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>110.50</Table.Cell>
                            <Table.Cell >$205.55</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable onClick={this.showTransactionModal('mini')}>Deposit</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/8/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>10.00</Table.Cell>
                            <Table.Cell >$215.55</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable onClick={this.showTransactionModal('mini')}>Shoes from JCPenny</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/9/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>$50.00</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell >165.55</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                {moneyModal}
                {dateModal}
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

export default connect(mapStateToProps, { getAllAccounts, getTransactions })(Accounts)