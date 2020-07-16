import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebViewAutor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const urlRedirect = navigation.getParam('urlRedirect');
    return (
      <WebView source={{ uri: `${urlRedirect}` }} />
    );
  }
}

export default WebViewAutor;
