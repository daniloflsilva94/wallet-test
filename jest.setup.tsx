import '@testing-library/jest-native/extend-expect';
import { render, RenderOptions } from '@testing-library/react-native';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';

export { };


// @ts-ignore
global.renderWithTheme = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    ...options,
  });

declare global {
  var renderWithTheme: (
    ui: ReactElement,
    options?: RenderOptions
  ) => ReturnType<typeof render>;
}