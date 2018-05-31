import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { FormGroup, ControlLabel,FormControl,Form, Col, Button } from 'react-bootstrap';

class AddTodo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    if (!ReactDOM.findDOMNode(this.entry).value.trim()) {
      return;
    }
    this.props.dispatch(addTodo(ReactDOM.findDOMNode(this.entry).value));
    ReactDOM.findDOMNode(this.entry).value = '';
  }

  render(){
    return (
        <div>
          <Form horizontal onSubmit={ this.handleSubmit }>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Todo
              </Col>
              <Col sm={5}>
                <FormControl type="text" placeholder="Todo" ref={node => this.entry = node} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="success" bsSize="small" type="submit">Add</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
    )
  }
}

export default connect()(AddTodo)