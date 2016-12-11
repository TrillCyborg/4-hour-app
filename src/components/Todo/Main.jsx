import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  List,
  Paper,
} from 'material-ui';
import { updateTaskValue, toggleEditTask, removeTask } from '../../actions';
import { TaskInput, TaskItem } from './';

const ImportantMessage = () => (
  <Paper style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, marginBottom: 20 }}>
    <h4 style={{ textAlign: 'center' }}>If this is the only thing you accomplish today, will you be satisfied with your day?</h4>
  </Paper>
);

class Todo extends Component {
  constructor(props) {
    super(props);

    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  renderTodoItems() {
    return this.props.todoList.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        toggleEditTask={this.props.toggleEditTask}
        removeTask={this.props.removeTask}
        updateTaskValue={this.props.updateTaskValue}
      />
    )).reverse();
  }

  render() {
    return (
      <Grid fluid style={{ marginTop: 15 }}>
        <Row>
          <Col xs={7} xsOffset={2}>
            {this.props.isImportant ? <ImportantMessage /> : null}
          </Col>
        </Row>
        <Row>
          <TaskInput />
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <List>
              {this.renderTodoItems()}
            </List>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Todo.propTypes = {
  toggleEditTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskValue: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
  isImportant: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
  isImportant: state.todo.isImportant,
});

export default connect(mapStateToProps, {
  toggleEditTask,
  removeTask,
  updateTaskValue,
})(Todo);
