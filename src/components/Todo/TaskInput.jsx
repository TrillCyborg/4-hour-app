import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { TextField, IconButton, FontIcon } from 'material-ui';
import StarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import { addTask, updateTempTask, toggleImportant } from '../../actions';

const MAX_TASKS = 6;
const MAX_IMPORTANT_TASKS = 2;

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    if (this.props.tempTask) {
      this.props.addTask();
    }
  }

  handleOnEnter(target) {
    if (target.charCode === 13) {
      this.addTask();
    }
  }

  render() {
    return (
      <div>
        <Col xs={7} xsOffset={2}>
          <TextField
            disabled={this.props.todoList.length === MAX_TASKS}
            hintText="Add task"
            style={{ width: '100%' }}
            value={this.props.tempTask}
            onKeyPress={this.handleOnEnter}
            onChange={text => this.props.updateTempTask(text.target.value)}
          />
        </Col>
        <Col xs={1}>
          <IconButton
            onTouchTap={this.props.toggleImportant}
            tooltip="Important"
            disabled={
              this.props.todoList.length === MAX_TASKS ||
              this.props.todoList.filter(task => task.isImportant).length === MAX_IMPORTANT_TASKS
            }
          >
            <FontIcon>
              {this.props.isImportant ? <StarIcon /> : <StarBorderIcon />}
            </FontIcon>
          </IconButton>
        </Col>
      </div>
    );
  }
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
  updateTempTask: PropTypes.func.isRequired,
  toggleImportant: PropTypes.func.isRequired,
  tempTask: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired,
  isImportant: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tempTask: state.todo.tempTask,
  todoList: state.todo.todoList,
  isImportant: state.todo.isImportant,
});

export default connect(mapStateToProps, {
  addTask,
  updateTempTask,
  toggleImportant,
})(TaskInput);
