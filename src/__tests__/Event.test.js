import React, { Component } from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test("render the component", () => {
        expect(EventWrapper).toHaveLength(1);
    });

    test("rendre the eventwrapping div", () => {
        expect(EventWrapper.find(".event")).toHaveLength(1);
    });

    test("render show event__Overview", () => {
        expect(EventWrapper.find(".event").children()).toHaveLength(1);
    });

    test("render event__Overview", () => {
        expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
    });

    test("render event__Overview children ", () => {
        expect(EventWrapper.find(".event__Overview").children()).toHaveLength(4);
    });

    test("render event__Details children ", () => {
        EventWrapper.setState({
            showDetails: true,
        });
        expect(EventWrapper.find(".event__Details--description")).toHaveLength(1);
    });

    test("render show/hide details button ", () => {
        expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
    });

    test("click on button should show details", () => {
        EventWrapper.setState({
            showDetails: false,
        });
        EventWrapper.find(".event__Overview button").simulate("click");
        expect(EventWrapper.state("showDetails")).toBe(true);
    });
});