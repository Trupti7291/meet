import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";


class NumberOfEvents extends Component {

    render() {
        return (
            <Container className="NumberOfEvents">
                <Row>
                    <Col>
                        <p>Number of events to show:</p>
                        <input type="number"
                            className="number-of-events"
                            value={this.props.numberOfEvents}
                            onChange={(e) => this.props.updateNumberOfEvents(e)} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NumberOfEvents;