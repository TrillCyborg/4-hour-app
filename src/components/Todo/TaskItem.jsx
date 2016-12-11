import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { TextField, ListItem, Checkbox, IconButton, FontIcon } from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';
import StarIcon from 'material-ui/svg-icons/toggle/star';

const Important = () => <IconButton><FontIcon><StarIcon /></FontIcon></IconButton>;
const EditTask = ({ task, handleOnEnterEdit, updateTaskValue }) => (
  <TextField
    hintText="Edit task"
    style={{ width: '100%' }}
    value={task.value}
    onKeyPress={handleOnEnterEdit}
    onChange={text => updateTaskValue(task.id, text.target.value)}
  />
);

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnEnterEdit = this.handleOnEnterEdit.bind(this);
    this.getTaskValue = this.getTaskValue.bind(this);
  }

  getTaskValue() {
    return this.props.task.isEditing ? <EditTask task={this.props.task} handleOnEnterEdit={this.handleOnEnterEdit} updateTaskValue={this.props.updateTaskValue} /> : this.props.task.value;
  }

  handleOnEnterEdit(target) {
    if (target.charCode === 13) {
      this.props.toggleEditTask(this.props.task.id);
    }
  }

  render() {
    return (
      <ListItem key={this.props.task.id} leftCheckbox={<Checkbox />}>
        <Row key={this.props.task.id}>
          <Col xs={8}>
            {this.getTaskValue()}
          </Col>
          <Col xs={1} xsOffset={1}>
            {this.props.task.isImportant ? <Important /> : <div />}
          </Col>
          <Col xs={1}>
            <IconButton onTouchTap={() => this.props.toggleEditTask(this.props.task.id)}>
              <FontIcon>
                <EditIcon />
              </FontIcon>
            </IconButton>
          </Col>
          <Col xs={1}>
            <IconButton onTouchTap={() => this.props.removeTask(this.props.task.id)}>
              <FontIcon>
                <DeleteIcon />
              </FontIcon>
            </IconButton>
          </Col>
        </Row>
      </ListItem>
    );
  }
}

TaskItem.propTypes = {
  removeTask: PropTypes.func.isRequired,
  updateTaskValue: PropTypes.func.isRequired,
  toggleEditTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

export default TaskItem;
