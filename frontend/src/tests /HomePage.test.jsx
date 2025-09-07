import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: async () => ({
    city: "Stockholm",
    temp_c: 20,
    condition_text: "Sunny",
    localtime: "12:00",
  }),
});

vi.mock("../components/Sidebar", () => ({
  default: ({ favorites }) =>
    `MockSidebar ${favorites.map((f) => f.city).join(",")}`,
}));

vi.mock("../components/WeatherDisplay", () => ({
  default: ({ selectedCity }) => `MockWeatherDisplay ${selectedCity}`,
}));

import HomePage from "../pages/HomePage.jsx";

test("renderar Sidebar och WeatherDisplay", async () => {
  render(<HomePage />);

  await waitFor(() =>
    expect(screen.getByText(/mocksidebar/i)).toBeInTheDocument()
  );
  expect(screen.getByText(/mockweatherdisplay/i)).toBeInTheDocument();
});
