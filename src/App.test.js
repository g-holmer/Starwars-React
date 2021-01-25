import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Test app.js ", () => {
  it("Checks that learn react exists", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("a").text()).toContain("Learn React");
  });
  it("Checks for hello", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("h1").text()).toContain("Hello");
  });
});
