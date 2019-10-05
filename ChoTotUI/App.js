import React from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppNavigator from './navigation/AppNavigator';
import AppLoading from './screens/AppLoading';
import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer)

// https://reactnavigation.org/docs/en/react-native-screens.html
// import { useScreens } from 'react-native-screens';
// useScreens();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false
    }
  }

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([

      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight
  },
});
