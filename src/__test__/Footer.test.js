import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  test("Renders a <Footer />", () => {
    render(<Footer />);
  });

  //   it.todo("Should render copyright text");
  test("Should render copyright text", () => {
    render(<Footer />);
    const textContent = screen.getByText("Copyright 2024");
    expect(textContent).toBeInTheDocument();
  });
});
