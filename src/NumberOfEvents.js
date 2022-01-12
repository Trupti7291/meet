import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 33 || value > 1) {
            this.setState({
                numberOfEvents: '',
            })
        } else {
            this.setState({
                numberOfEvents: value,
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };


    render() {
        return (
            <Container className="NumberOfEvents">
                <Row>
                    <Col>
                        <p>Number of events:</p>
                        <input type="number"
                            value={this.props.numberOfEvents}
                            className="number-of-events"
                            onChange={(e) => this.props.updateNumberOfEvents(e)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ErrorAlert text={this.props.errorText} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NumberOfEvents;