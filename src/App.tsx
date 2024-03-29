import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/noto-sans/200.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';
import '@fontsource/noto-sans/900.css';
import theme from './themes/theme';
import Router from './pages/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LangContextProvider from './context/LangContext';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LangContextProvider>
            <Provider store={store}>
              <Router />
            </Provider>
          </LangContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
