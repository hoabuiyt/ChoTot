import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import MySearchBar from '../components/MySearchBar';
import DevModeNotify from '../components/DevModeNotify';

class ChatScreen extends Component {
  state = {}

  onSubmitEditingSearch = (text) => {
    alert('Tìm kiếm ' + text);
    console.log(text)
  }

  render() {
    return <Container>
      <MySearchBar
        placeholder="Tìm kiếm tin nhắn"
        onSubmitEditing={this.onSubmitEditingSearch}
        leftButton={'arrow-back'}
        onPressLeftButton={() => alert('back')}
        rightButton={'ios-log-out'}
        onPressRightButton={() => { this.props.navigation.navigate('LogIn') }}
      />
      <DevModeNotify />
    </Container>;
  }
}

export default ChatScreen;