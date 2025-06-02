// file: src/Profile.test.jsx

import { render, screen } from "@testing-library/react";
import Profile from "../src/Profile";

// test("renders with the correct title ", () => {
//   // Setup - rendering the component on the page
//   render(<Profile />);

//   // Assert
//   expect(screen.getByRole("heading")).toHaveTextContent("HO Tech Trackers");
// });

// test("renders correct job title ", () => {
//     render(<Profile />);
//     expect(screen.getByText("Software Engineers")).toBeInTheDocument();
// });

// test("renders correct birth year ", () => {
//     render(<Profile />);
//     expect(screen.getByText("2025")).toBeInTheDocument();
// });

//Re-implement the Profile component, 
// this time test-driving it 
// (write the test first, see it fail, then write the component code).
test("renders name, job and birthdate", () => {
    render(<Profile />);
    expect(screen.getByText("HO Tech Trackers")).toBeInTheDocument();
    expect(screen.getByText("Software Engineers")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
});