import React, { Component } from 'react';
import { Button, Modal, Input, Label } from 'semantic-ui-react';

export default class TransactionModal extends Component {
    state = {
        openTransaction: false
    }

    showTransactionModal = size => () => this.setState({ size, openTransaction: true })
    closeTransactionModal = () => this.setState({ openTransaction: false })

    render() {
        const { openTransaction, size } = this.state

        return (
            <div>
                <Modal size={size} open={openTransaction} onClose={this.closeTransactionModal}>
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
            </div>
        )
    }

}