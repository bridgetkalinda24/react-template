// file: src/Counter.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

test("renders with initial value of 0", () => {
    //setup
    render(<Counter />);

    //assert
    expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2", async () => {
    //setup
    render(<Counter />);

    //act - click the button twice
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Increment the counter"));

    //assert
    expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("renders a decrement to the counter", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Decrement the counter"));
    expect(screen.getByRole("heading")).toHaveTextContent("-1");
})