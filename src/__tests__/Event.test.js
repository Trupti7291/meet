import React, { Component } from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe('<Event /> component', () => {
    let EventWrapper;
    let event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    // Test cases that test basic information
    test('renders summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });
    test('renders start-date and timezone', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    });
    test('renders location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });
    test('renders the show/hide details button', () => {
        expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
    });

    //Scenario 1
    test('An event element is collapsed by default', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
    //Scenario 2
    test('User can expand an event to see its details', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });
    //Scenario 3
    test('User can collapse an event to hide its details', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find('.hide-details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
});