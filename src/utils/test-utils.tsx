import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme/theme';

export function renderWithTheme(ui: ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={DefaultTheme}>
        {ui}
      </NavigationContainer>
    </ThemeProvider>
  );
}