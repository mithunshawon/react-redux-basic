import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import {Col, Jumbotron} from 'react-bootstrap';

const App = () => (
  <div>
    <Col sm={6} smOffset={6}>
    <Jumbotron>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Jumbotron> 
    </Col>  
  </div>
)

export default App