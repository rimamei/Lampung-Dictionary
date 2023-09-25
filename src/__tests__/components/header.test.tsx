import { useTheme } from "next-themes";
import React from "react";

import Header from "@/components/Header"; // Import your component

import { fireEvent, render } from "@/utils/test-utils";

const ThemeSpy: React.FC = () => {
  const { theme } = useTheme();
  return <span data-testid="theme-spy">{theme}</span>;
};

describe("Testing header component", () => {
  let localStorageMock: { [key: string]: string } = {};

  beforeAll(() => {
    // Create a mock of the window.matchMedia function
    global.matchMedia = jest.fn((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    // Create mocks of localStorage getItem and setItem functions
    global.Storage.prototype.getItem = jest.fn(
      (key: string) => localStorageMock[key],
    );
    global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
      localStorageMock[key] = value;
    });
  });

  beforeEach(() => {
    // Clear the localStorage-mock
    localStorageMock = {};
  });

  test("renders header component", () => {
    const { getByTestId } = render(
      <>
        <Header />
        <ThemeSpy />
      </>,
      { theme: "dark" },
    );

    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  test("clicking sun icon changes to light theme", () => {
    const { getByTestId } = render(
      <>
        <Header />
        <ThemeSpy />
      </>,
      { theme: "dark" },
    );

    const lightTheme = getByTestId("light-theme");
    const spy = getByTestId("theme-spy");

    fireEvent.click(lightTheme);
    expect(spy).toHaveTextContent("light");
  });
  test("clicking moon icon changes to dark theme", () => {
    const { getByTestId } = render(
      <>
        <Header />
        <ThemeSpy />
      </>,
      { theme: "dark" },
    );

    const darkTheme = getByTestId("dark-theme");
    const spy = getByTestId("theme-spy");

    fireEvent.click(darkTheme);
    expect(spy).toHaveTextContent("dark");
  });
});
