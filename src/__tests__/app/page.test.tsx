import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import TranslationPage from "@/app/page";
import { ParamsType } from "@/lib/type";
import { fetchSearchData } from "@/service";

jest.mock("@/components/Header", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-header">Mocked Header</div>,
  };
});

jest.mock("@/components/Footer", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-footer">Mocked Footer</div>,
  };
});

jest.mock("@/features/Translation", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-translation">Mocked Translation</div>,
  };
});

const mockData = {
  message: "Success get data",
  data: [
    {
      id: "sfasfdsa12",
      lpgkata: "niku",
      idkata: "kamu",
      lpgdialek: "api",
    },
  ],
};

describe("TranslationPage", () => {
  let props: { searchParams: ParamsType };
  const mockFetch = jest.fn();
  const searchParams: ParamsType = {
    lang: "id",
    text: "kamu",
  };

  beforeEach(() => {
    props = {
      searchParams,
    };

    jest.spyOn(global, "fetch");
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("handles API call error", async () => {
    const mockResponse = {
      ok: false,
      json: async () => Promise.resolve(mockData),
    };

    // Set up the fetch mock to return the mock response
    mockFetch.mockResolvedValue(mockResponse);

    await expect(
      fetchSearchData({ text: "", lang: "id" }),
    ).rejects.toThrowError("Failed to fetch data");
  });

  it("fetches and displays translation data", async () => {
    const mockResponse = {
      ok: true,
      json: async () => Promise.resolve(mockData),
    };

    // Set up the fetch mock to return the mock response
    mockFetch.mockResolvedValue(mockResponse);

    const Page = await TranslationPage(props);

    render(Page);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId("mock-header")).toBeInTheDocument();
      expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
      expect(screen.getByTestId("mock-translation")).toBeInTheDocument();
    });
  });
});
