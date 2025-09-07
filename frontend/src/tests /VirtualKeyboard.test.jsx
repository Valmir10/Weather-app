import { vi } from "vitest";

vi.mock("simple-keyboard", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      getInput: vi.fn(() => "typed text"),
      setInput: vi.fn(),
      destroy: vi.fn(),
    })),
  };
});

import { render, screen } from "@testing-library/react";
import VirtualKeyboard from "../components/VirtualKeyboard";

test("render keyboard-container", () => {
  render(
    <VirtualKeyboard value="test" onChange={() => {}} onEnter={() => {}} />
  );
  expect(screen.getByTestId("keyboard-container")).toBeInTheDocument();
});
