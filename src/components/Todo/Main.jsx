import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Todo extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} sm={6}>
            <div style={{ backgroundColor: 'red', width: '100%', height: 200 }} />
          </Col>
          <Col xs={6} sm={6}>
            <div style={{ backgroundColor: 'blue', width: '100%', height: 200 }} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Todo;
