import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Button, Image } from 'react-native-elements';

class LogInScreen extends Component {
  state = {
    phone: '',
    pass: ''
  }
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/screens/waveScreen2.png')}>
        <View style={styles.smallContainer}>
          <Image style={{ height: 75, marginBottom: 20 }} source={require('../assets/images/logos/dangNhapLogo.png')} />

          <TextInput
            keyboardType='phone-pad'
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#575757"
            style={styles.input}
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#575757"
            style={styles.input}
            value={this.state.pass}
            onChangeText={(pass) => this.setState({ pass })}
          />

          <Button
            title="ĐĂNG NHẬP"
            containerStyle={{ marginVertical: 15 }}
            buttonStyle={{ backgroundColor: '#FF9900', padding: 10 }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => alert('Đăng nhập thành công')}
          ></Button>
          <Button
            title="Quên mật khẩu"
            containerStyle={{ marginBottom: 15 }}
            buttonStyle={{ backgroundColor: "#E7E7E7", padding: 10, borderColor: '#999', borderWidth: 1 }}
            titleStyle={{ color: "#000" }}
          ></Button>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              title="Facebook"
              containerStyle={{ flex: 0.5 }}
              buttonStyle={{ backgroundColor: "#3B5998" }}
            ></Button>
            <Button
              title="Đăng ký"
              containerStyle={{ flex: 0.45 }}
              buttonStyle={{ backgroundColor: "#4CB944" }}
              onPress={() => { this.props.navigation.navigate('SignUp') }}
            ></Button>
          </View>

        </View>

        <Button
          title="BỎ QUA"
          // icon={{
          //   name: "arrow-back",
          //   size: 25,
          //   color: '#999'
          // }}
          containerStyle={{ position: 'absolute', top: 2, right: 0 }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          titleStyle={{ color: '#999' }}
          onPress={() => { this.props.navigation.navigate('Main') }}
        ></Button>

      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallContainer: {
    width: '80%',
  },
  input: {
    padding: 10,
    backgroundColor: "#E7E7E7",
    borderRadius: 5,
    marginTop: 10,
    fontStyle: 'italic'
  }
})

export default LogInScreen;