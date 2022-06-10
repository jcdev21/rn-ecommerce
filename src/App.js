import {ThemeProvider} from '@emotion/react';
import React from 'react';
import AuthProvider from './libs/contexts/AuthContext';
import Routes from './routes';

const theme = {
  fontColor: '#111111',
  primaryColor: '#E6BA95',
  secondaryColor: '#FAFDD6',
  thirtyColor: '#97DBAE',
  fourtyColor: '#C3E5AE',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
