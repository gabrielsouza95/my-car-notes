import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Car Note</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="note-title">Title</Label>
              <Input
                type="text"
                id="note-title"
                name="note_title"
                value={this.state.activeItem.note_title}
                onChange={this.handleChange}
                placeholder="Enter note title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="note-description">Description</Label>
              <Input
                type="text"
                id="todo-description"
                name="note_description"
                value={this.state.activeItem.note_description}
                onChange={this.handleChange}
                placeholder="Enter note description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="note-km">Car's odometer reading</Label>
              <Input
                type="number"
                id="note-km"
                name="note_km"
                value={this.state.activeItem.note_km}
                onChange={this.handleChange}
                placeholder="Enter car's odometer reading"
              />
            </FormGroup>
            <FormGroup>
              <Label for="note-date">Date</Label>
              <Input
                type="datetime-local"
                id="note-date"
                name="note_date"
                value={this.state.activeItem.note_date}
                onChange={this.handleChange}
                placeholder="Enter note date"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}