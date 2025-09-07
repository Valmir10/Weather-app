import { vi } from "vitest";

vi.mock("../components/Header", () => ({
  default: ({ onSearch }) => "MockHeader",
}));

vi.mock("../components/WeatherDetail", () => ({
  default: ({ city }) => `MockWeatherDetail ${city}`,
}));

import { render, screen } from "@testing-library/react";
import WeatherDisplay from "../components/WeatherDisplay";

test("render Header and WeatherDetail", () => {
  const mockSearch = vi.fn();
  render(
    <WeatherDisplay
      onSearch={mockSearch}
      selectedCity="Stockholm"
      onDelete={() => {}}
      toggleSidebar={() => {}}
      isSidebarOpen={false}
    />
  );

  expect(screen.getByText(/mockheader/i)).toBeInTheDocument();
  expect(screen.getByText(/mockweatherdetail stockholm/i)).toBeInTheDocument();
});
