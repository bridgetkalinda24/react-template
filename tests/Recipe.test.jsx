import { render, screen } from "@testing-library/react";
import Recipe from "../src/Recipe";

test("renders recipe title, type and duration", () => {
    render(<Recipe 
        title="Finnish cinnamon buns"
        type="dessert"
        duration={60}
    />);

    expect(screen.getByText("Finnish cinnamon buns")).toBeInTheDocument();
    expect(screen.getByText(/dessert/i)).toBeInTheDocument();
    expect(screen.getByText(/60/i)).toBeInTheDocument();
});