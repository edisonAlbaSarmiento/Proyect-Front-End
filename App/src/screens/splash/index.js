import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const loading = require('../../assets/loading.json');

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.processNavigation();
    }, 3000);
  }

  processNavigation = async () => {
    const {
      navigation,
      isLoggedIn,
    } = this.props;

    if (isLoggedIn) {
      navigation.navigate('Login');
    }
  };


  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={loading}
          autoPlay
        />
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default Splash;
