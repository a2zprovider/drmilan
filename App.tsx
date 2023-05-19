import React, { Component } from 'react';
import { KeyboardAvoidingView, Linking, StatusBar, ToastAndroid } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

  async componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <KeyboardAvoidingView keyboardShouldPersistTaps={'always'} style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <StatusBar
            animated={true}
            backgroundColor={'#fb541f'}
            barStyle={'default'}
            hidden={false} />
          <StackNavigation {...this.props} />
        </KeyboardAvoidingView>
      </>
    );
  }
}