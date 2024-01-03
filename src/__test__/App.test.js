import { render, screen } from "@testing-library/react";
import App from "../App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders <App />", () => {
  render(<App />);
});
describe("App component", () => {
  test("Renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  // DEBUG:
  // HACK:
  // TODO:
  // DOCS:
  // NOTE: `test.only()` runs only this and skips all other tests
  // test.only("Renders learn react link", () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  test.todo("Render a button");

  it.todo("Render a image");

  it("Renders react logo", () => {
    render(<App />);

    const logoSrcElement = screen.getByRole("img", { src: "/src/logo.svg" });
    expect(logoSrcElement).toBeInTheDocument();

    const logoAltElement = screen.getByAltText(/logo/i);
    expect(logoAltElement).toBeInTheDocument();
  });

  it.skip("Renders hello world text", () => {
    render(<App />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });
});
