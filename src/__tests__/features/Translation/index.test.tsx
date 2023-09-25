import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Translation from "@/features/Translation";

jest.mock("lodash", () => ({
  debounce: (fn: any) => fn,
}));
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

describe("Render feature translation", () => {
  const mockData = {
    message: "Success get data",
    data: [
      {
        id: "sfasfdsa12",
        lpgkata: "niku",
        idkata: "kamu",
        lpgaksara: null,
        lpgdialek: "api",
      },
      {
        id: "sfasfdsa13",
        lpgkata: "niku",
        idkata: "kamu",
        lpgaksara: null,
        lpgdialek: "api",
      },
      {
        id: "sfasfdsa14",
        lpgkata: "niku",
        idkata: "kamu",
        lpgaksara: null,
        lpgdialek: "api",
      },
      {
        id: "sfasfdsa15",
        lpgkata: "niku",
        idkata: "kamu",
        lpgaksara: null,
        lpgdialek: "api",
      },
      {
        id: "sfasfdsa16",
        lpgkata: "niku",
        idkata: "kamu",
        lpgaksara: null,
        lpgdialek: "api",
      },
    ],
  };

  let props = { data: mockData };
  it("render translation", () => {
    const { getByTestId } = render(<Translation {...props} />);

    const text = getByTestId("translation");

    expect(text).toBeInTheDocument();
  });

  it("change input value translation", () => {
    const { getByTestId } = render(<Translation {...props} />);

    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "kamu" } });
    expect((input as HTMLInputElement).value).toBe("kamu");
  });

  it("change to lampung - indonesia translation", () => {
    const { getByTestId } = render(<Translation {...props} />);

    const button = getByTestId("language-change");
    const output = getByTestId("lang-output");

    fireEvent.click(button);
    expect(output.textContent).toBe("Indonesia");
  });
});
