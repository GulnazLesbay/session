import React from 'react';
import { GlobalStyle } from './features/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './features/Theme/theme';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from './features/Theme/themeSlice';
import PersonalHomepage from './features/PersonalHomepage';

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}
export default App;

