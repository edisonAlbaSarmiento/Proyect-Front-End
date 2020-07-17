import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const loading = require('../../assets/loading.json');

class Splash extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.changeState();
    setTimeout(() => {
      this.processNavigation();
    }, 3000);
  }

  changeState = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  processNavigation = async () => {
    const {navigation} = this.props;
    const {isLoggedIn} = this.state;
    if (isLoggedIn) {
      navigation.navigate('Home');
    } else {
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
