import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("react-icons/io5", () => ({
  IoCloseCircle: () => "Icon",
}));

import Sidebar from "../components/Sidebar";

test("visar 'No favorites added yet' the list is empty", () => {
  render(
    <Sidebar
      favorites={[]}
      selectedCity=""
      onSelect={() => {}}
      isOpen={true}
      toggleSidebar={() => {}}
    />
  );

  expect(screen.getByText(/no favorites added yet/i)).toBeInTheDocument();
});

test("render one city in the list", () => {
  const favorites = [
    {
      city: "Stockholm",
      temp_c: 20,
      condition_text: "Sunny",
      localtime: "2025-09-06 12:00",
    },
  ];

  render(
    <Sidebar
      favorites={favorites}
      selectedCity=""
      onSelect={() => {}}
      isOpen={true}
      toggleSidebar={() => {}}
    />
  );

  expect(screen.getByText(/stockholm/i)).toBeInTheDocument();
});
