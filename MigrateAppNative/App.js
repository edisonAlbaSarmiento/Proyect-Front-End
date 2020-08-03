import React from 'react';

import NewNavigation from './src/navigation/AppNavigator';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewNavigation />
    </ThemeProvider>
  );
}

export default App;
