// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Imports
import { Provider } from 'react-redux';
import Store from './Store';
// Asset Imports
import App from './App';
// MUI Import
import { StyledEngineProvider, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// WebVitals Import
import reportWebVitals from './reportWebVitals';

const theme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6800',
    },
    secondary: {
      main: '#FFB27E',
    },
    error: {
      main: '#f44336',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
