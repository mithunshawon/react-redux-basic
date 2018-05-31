import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Button} from 'react-bootstrap';


const Todo = ({ onToggleClick, onDeleteClick, completed, text }) => (

    <div className="row" style={{margin:2}}>
        <div className="col-sm-8">
          <ListGroupItem className="col-sm-12" onClick={onToggleClick} 
          style={{
            padding:0, backgroundColor: completed ? 'green' : 'white', color: completed ? 'white' : 'black'
          }}>
          {text}
        </ListGroupItem>
      </div>
      <div className="col-sm-4"> 
      <Button style={{padding:1}} bsStyle="danger" onClick={onDeleteClick}>Delete</Button>
      </div>
    </div>

)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo