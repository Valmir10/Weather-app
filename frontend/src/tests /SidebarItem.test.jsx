import { render, screen, fireEvent } from "@testing-library/react";
import SidebarItem from "../components/SidebarItem";
import { vi } from "vitest";

test("render city name and temperature", () => {
  render(
    <SidebarItem
      city="Stockholm"
      temperature={20}
      weather="Sunny"
      time="12:00"
      isActive={false}
      onSelect={() => {}}
    />
  );

  expect(screen.getByText(/stockholm/i)).toBeInTheDocument();
  expect(screen.getByText(/20°/i)).toBeInTheDocument();
  expect(screen.getByText(/sunny/i)).toBeInTheDocument();
  expect(screen.getByText(/12:00/i)).toBeInTheDocument();
});

test("anropar onSelect vid klick", () => {
  const mockSelect = vi.fn();
  render(
    <SidebarItem
      city="Göteborg"
      temperature={15}
      weather="Rainy"
      time="10:00"
      isActive={true}
      onSelect={mockSelect}
    />
  );

  fireEvent.click(screen.getByText(/göteborg/i));
  expect(mockSelect).toHaveBeenCalled();
});
