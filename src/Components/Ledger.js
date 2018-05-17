import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTransactions, getAccount } from '../redux/reducer';
import { Responsive, Table, Button, Modal, Input, Label } from 'semantic-ui-react';
import _ from 'lodash';

class Ledger extends Component {
    constructor() {
        super()

        this.state = {
            openDate: false,
            openMoney: false,
            openTransaction: false,
        }
    }

    componentDidMount() {
        this.props.getAccount()
        this.props.getTransactions()
    }

    showTransactionModal = size => () => this.setState({ size, openTransaction: true })
    closeTransactionModal = () => this.setState({ openTransaction: false })
    showDateModal = size => () => this.setState({ size, openDate: true })
    closeDateModal = () => this.setState({ openDate: false })
    showMoneyModal = size => () => this.setState({ size, openMoney: true })
    closeMoneyModal = () => this.setState({ openMoney: false })

    render() {
        const ledgerRows = _.map(this.props.accounts, (accounts, index) => {
            return <option key={accounts.id} value={accounts.id}>{accounts.account_name}</option>
        })

        const { openDate, openMoney, openTransaction, size } = this.state

        const dateModal = <Modal size={size} open={openDate} onClose={this.closeDateModal}>
            <Modal.Header>Update Transaction</Modal.Header>
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

        const moneyModal = <Modal size={size} open={openMoney} onClose={this.closeMoneyModal}>
            <Modal.Header>Update Transaction</Modal.Header>
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

        const transactioModal = <Modal size={size} open={openTransaction} onClose={this.closeTransactionModal}>
            <Modal.Header>Update Transaction</Modal.Header>
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
            <div>
                <Table celled selectable stackable textAlign='right' >
                    <Responsive as={Table.Header} minWidth={767} >
                        <Table.Row textAlign='left'>
                            <Table.HeaderCell >Transaction</Table.HeaderCell>
                            <Table.HeaderCell >Date</Table.HeaderCell>
                            <Table.HeaderCell >Debit</Table.HeaderCell>
                            <Table.HeaderCell >Credit</Table.HeaderCell>
                            <Table.HeaderCell >Balance</Table.HeaderCell>
                        </Table.Row>
                    </Responsive>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell textAlign='left' >Opening Balance</Table.Cell>
                            <Table.Cell ></Table.Cell>
                            <Table.Cell ></Table.Cell>
                            <Table.Cell ></Table.Cell>
                            <Table.Cell >$100.00</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable textAlign='left' onClick={this.showTransactionModal('mini')}>Burger King Wopper</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/7/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>4.95</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell >$95.05</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell selectable textAlign='left' onClick={this.showTransactionModal('mini')}>Shirt and pants</Table.Cell>
                            <Table.Cell selectable onClick={this.showDateModal('mini')}>3/8/2018</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}>50.95</Table.Cell>
                            <Table.Cell selectable onClick={this.showMoneyModal('mini')}></Table.Cell>
                            <Table.Cell >$44.10</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                {dateModal}
                {moneyModal}
                {transactioModal}
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

export default connect(mapStateToProps, { getTransactions, getAccount })(Ledger)