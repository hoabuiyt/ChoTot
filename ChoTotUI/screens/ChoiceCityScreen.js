import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Modal,
  View,
  Text,
  AsyncStorage
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'

import ModalPicker from '../components/ModalPicker'
// import { uuidv4 } from '../utils/functions'

class ChoiceCityScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    const defaultCityText = 'Chọn vùng của bạn';

    this.state = {
      isModalVisible: false,
      // defaultCityText: defaultCityText,
      cityText: defaultCityText,
    };
  };

  componentDidMount = async () => {
    // console.log(this.props.uuid)

    // // const uuid = await AsyncStorage.getItem('uuid')
    // const { uuid } = this.props
    // if (uuid) {
    //   // this.props.setUuid(uuid)
    //   this.props.navigation.navigate('Main')
    // } else {
    //   let newUuid = uuidv4()
    //   // AsyncStorage.setItem('uuid', newUuid)
    //   this.props.setUuid(newUuid)
    // }
  }

  changeModalVisibility = (visible) => {
    this.setState({
      isModalVisible: visible,
    });
  };

  onPressCity = (city) => {
    this.changeModalVisibility(false);
    this.setState({
      cityText: city,
    });

    this.props.setRegion(city)
    this.onPressContinueButton();
  };

  onPressContinueButton = () => {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/screens/2.png')}>
        <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={styles.pickerLabel}>
          <Text style={styles.textLabel}>{this.state.cityText}</Text>
          <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={styles.dropdownButton}>
            <Ionicons name="md-arrow-dropdown" size={32} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* {
          this.state.cityText != this.state.defaultCityText && (
            <TouchableOpacity style={styles.continueButton} onPress={this.onPressContinueButton}>
              <Text style={styles.continueText}>Tiếp tục</Text>
            </TouchableOpacity>
          )
        } */}

        <Modal
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => this.changeModalVisibility(false)}
          animationType='slide'
        >
          <View style={{ flex: 0.22 }}></View>
          <View style={{ alignItems: 'center', flex: 0.78 }}>
            <ModalPicker onPressCity={this.onPressCity} />
          </View>
        </Modal>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickerLabel: {
    height: 60,
    width: '75%',
    backgroundColor: '#FFD02C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },

  textLabel: {
    fontSize: 15,
    marginLeft: 15,
  },

  dropdownButton: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueButton: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(0, 179, 134)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});

const mapStateToProps = (state) => {
  return {
    region: state.UserReducer.region,
    uuid: state.UserReducer.uuid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRegion: (regionCode) => dispatch({ type: 'setRegion', region: regionCode }),
    setUuid: (uuid) => dispatch({ type: 'setUuid', uuid })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceCityScreen);