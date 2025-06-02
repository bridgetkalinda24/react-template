import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";

test("renders correct gigname, image, event, date and location", () => {
    render(<Gig
        gigname="Die With A Smile"
        image="Adele-Pose-Transparent-PNG.png"
        event="Event: Unmissable Concert!"
        date="Date: 16th July 2025 and Time: 2:00pm"
        location="Location: Tottenham Hotspur Stadium"
    />);
    
    expect(screen.getByRole("heading", {level: 3})).toHaveTextContent("Die With A Smile");
    expect(screen.getByRole("img")).toHaveAttribute("src", "Adele-Pose-Transparent-PNG.png");
    expect(screen.getByText("Event: Unmissable Concert!")).toBeInTheDocument();
    expect(screen.getByText("Date: 16th July 2025 and Time: 2:00pm")).toBeInTheDocument();
    expect(screen.getByText("Location: Tottenham Hotspur Stadium")).toBeInTheDocument();
});