/* eslint-disable react/display-name */

import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren, ReactElement } from "react";

interface TestProviderOptions {
  theme?: string;
}

interface CustomOptions extends RenderOptions, TestProviderOptions {}

const createTestProviders =
  ({ theme = "dark" }: TestProviderOptions): React.FC =>
  ({ children }: PropsWithChildren) => (
    <ThemeProvider defaultTheme={theme} enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );

const customRender = (
  ui: ReactElement,
  { theme, ...options }: CustomOptions = {},
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options });

export * from "@testing-library/react";

export { customRender as render };
