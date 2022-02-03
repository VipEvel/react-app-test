import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from "@testing-library/react"
import Button from "../button";

afterEach(cleanup);

it("renders without crash",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div)
})

it("renders button correctly",()=>{
    const {getByTestId} = render(<Button label={'Click me please'}/>);
    expect(getByTestId('button')).toHaveTextContent('Click me please')
})

