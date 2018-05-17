import React, { Component } from 'react';
import { Button, Modal, Input, Label } from 'semantic-ui-react';

export default class MoneyModal extends Component {
    state = {
        openMoney: false
    }

    showMoneyModal = size => () => this.setState({ size, openMoney: true })
    closeMoneyModal = () => this.setState({ openMoney: false })

    render() {
        const { openMoney, size } = this.state

        return (
            <div>
                <Modal size={size} open={openMoney} onClose={this.closeMoneyModal}>
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
            </div>
        )
    }

}