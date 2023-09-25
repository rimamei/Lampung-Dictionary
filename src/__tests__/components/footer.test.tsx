import { render } from "@testing-library/react";

import Footer from "@/components/Footer";

describe("Testing footer component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Footer />);

    const text = getByText(/2023 by Rima Mei Handayani/i);
    expect(text).toBeInTheDocument();
  });
});
