import React, { Component } from 'react';
import { Button, Modal, Input, Label } from 'semantic-ui-react';

export default class Modals extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openMoney: false,
            openDate: false,
            openTransaction: false
        }
    }

    showMoneyModal = size => () => this.setState({ size, openMoney: true })
    showDateModal = size => () => this.setState({ size, openDate: true })
    showTransactionModal = size => () => this.setState({ size, openTransaction: true })
    closeMoneyModal = () => this.setState({ openMoney: false })
    closeDateModal = () => this.setState({ openDate: false })
    closeTransactionModal = () => this.setState({ openTransaction: false })

    render() {
        const { openMoney, openDate, openTransaction, size } = this.state
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

        const transactionModal = <Modal size={size} open={openTransaction} onClose={this.closeTransactionModal}>
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
                {moneyModal}
                {dateModal}
                {transactionModal}
            </div>
        )
    }
}