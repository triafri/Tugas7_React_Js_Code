import React from 'react';
import './css/bootstrap.min.css';
import './App.css';
import {Alert, Container, Row, Col} from 'react-bootstrap';
import PageBadge from './component/PageBadge';
import PageMedia from './component/PageMedia'
import PageBreadcrumb from './component/PageBreadcrumb';
import PageCards from './component/PageCards';

function App() {
  return (
    <div id='divPad'>
                          <Row>
                        <Col sm={3}><Alert variant='primary'>Website React bootstrap</Alert></Col>
                        <Col sm={4}></Col>
                        <Col md='auto'><PageBadge/></Col>
                        <Col sm={2} id='colProf'><PageMedia/></Col>
                    </Row>
                    <Row noGutters>
                        <Col sm></Col>
                        <Col sm></Col>
                        <Col sm><PageBreadcrumb/></Col>
                    </Row>
                    <Container>
                    <Row>
                        <Col><PageCards/></Col>
                    </Row>
                </Container>
    </div>
  );
}

export default App;
