import React, { Component } from 'react';
import { Button, Modal, Input, Label } from 'semantic-ui-react';

export default class DateModal extends Component {
    state = {
        openDate: false
    }
    
    showDateModal = size => () => this.setState({ size, openDate: true })
    closeDateModal = () => this.setState({ openDate: false })

    render() {
        const { openDate, size } = this.state

        return (
            <div>
                <Modal size={size} open={openDate} onClose={this.closeDateModal}>
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
            </div>
        )
    }

}