import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
