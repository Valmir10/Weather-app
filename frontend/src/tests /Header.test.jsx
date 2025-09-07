import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("../styles/Header.css", () => ({}), { virtual: true });
vi.mock("../styles/ResponsiveDesktop.css", () => ({}), { virtual: true });

vi.mock("../components/VirtualKeyboard", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: () =>
      React.createElement(
        "div",
        { "data-testid": "virtual-keyboard" },
        "keyboard-mock"
      ),
  };
});

import Header from "../components/Header";
import VirtualKeyboard from "../components/VirtualKeyboard";

console.log("typeof Header:", typeof Header);
console.log("typeof VirtualKeyboard:", typeof VirtualKeyboard);

test("virtual keyboard mock renders standalone", () => {
  const { container } = render(<VirtualKeyboard />);
  console.log("VirtualKeyboard HTML:", container.innerHTML);

  expect(
    container.querySelector('[data-testid="virtual-keyboard"]')
  ).toBeTruthy();
});

test("Call onSearch", () => {
  const mockSearch = vi.fn();

  const { container } = render(<Header onSearch={mockSearch} />);
  console.log(
    "Rendered Header HTML (snippet):",
    container.innerHTML.slice(0, 300)
  );

  const input = screen.getByPlaceholderText(/search/i);
  fireEvent.change(input, { target: { value: "Stockholm" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(mockSearch).toHaveBeenCalledWith("Stockholm");
});
