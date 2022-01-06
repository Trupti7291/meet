import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Event extends Component {
    state = {
        events: {},
        collapsed: true,
    };

    handleClick = () => {
        this.state({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { events } = this.props;
        const { collapsed } = this.state;
        return (
            <Card className="events">
                <Card.Header className="summary">
                    {events.summary}
                </Card.Header>
                <Card.Body className="event-body">
                    <p className="start-date">
                        {events.start.dateTime} ({events.start.timeZone})
                    </p>

                    <p className="locations">
                        @{events.summary} | {events.location}
                    </p>

                    {!collapsed && (
                        <div
                            className={`extra-details ${this.state.collapsed ? 'hide' : 'show'
                                }`}
                        >
                            <br />
                            <h6 className="about">About Event</h6>
                            <a href={events.htmlLink} target="_blank">
                                See deatails on Google calendar
                            </a>
                            <p className="event-description">{events.description}</p>
                        </div>
                    )}
                    <Button
                        variant="light"
                        size="md"
                        id="eventButton"
                        className={`${collapsed ? 'show' : 'hide'}-details-btn`}
                        onClick={this.handleClick}
                    >
                        {collapsed ? 'show Details' : 'Hide Details'}
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
export default Event;