import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>VISTA CONFIG</Text>
      </View>
    );
  }
}
export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
