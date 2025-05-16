const { render, screen } = require("@testing-library/react");

const Navbar = require("./navbar");

test("hello world!", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/hello world/i);

  expect(linkElement).toBeInTheDocument();
});
