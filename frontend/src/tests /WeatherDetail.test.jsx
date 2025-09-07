import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import WeatherDetail from "../components/WeatherDetail";

vi.mock("react-icons/wi", () => ({
  WiRaindrop: () => <span data-testid="wi-raindrop">HumidityIcon</span>,
  WiStrongWind: () => <span data-testid="wi-strongwind">WindIcon</span>,
}));

vi.mock("react-icons/io", () => ({
  IoIosSunny: () => <span data-testid="io-sunny">SunnyIcon</span>,
}));

vi.mock("react-icons/md", () => ({
  MdDelete: (props) => (
    <button onClick={props.onClick} data-testid="md-delete">
      DeleteIcon
    </button>
  ),
}));

vi.mock("react-icons/gi", () => ({
  GiHamburgerMenu: (props) => (
    <button onClick={props.onClick} data-testid="gi-hamburger">
      HamburgerIcon
    </button>
  ),
}));

global.fetch = vi.fn();

const mockWeather = {
  city: "Stockholm",
  temp_c: 18,
  condition_text: "Cloudy",
  condition_icon: "icon.png",
  humidity: 50,
  wind_kph: 10,
  uv: 3,
};

test("Show loading when fetching", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockWeather,
  });

  render(<WeatherDetail city="Stockholm" />);

  await waitFor(() =>
    expect(
      screen.getByText(/loading weather for stockholm/i)
    ).toBeInTheDocument()
  );
});

test(" show weather information when fetch is completed", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockWeather,
  });

  render(<WeatherDetail city="Stockholm" />);

  await waitFor(() =>
    expect(screen.getByText(/stockholm/i)).toBeInTheDocument()
  );
  expect(screen.getByText(/cloudy/i)).toBeInTheDocument();
  expect(screen.getByText(/18°/i)).toBeInTheDocument();
  expect(screen.getByText(/50%/i)).toBeInTheDocument();
  expect(screen.getByText(/10 km\/h/i)).toBeInTheDocument();
  expect(screen.getByText(/3/i)).toBeInTheDocument();
});

test("show error message when fetch failed", async () => {
  fetch.mockRejectedValueOnce(new Error("API call failed"));

  render(<WeatherDetail city="Malmö" />);

  await waitFor(() =>
    expect(screen.getByText(/error: api call failed/i)).toBeInTheDocument()
  );
});
