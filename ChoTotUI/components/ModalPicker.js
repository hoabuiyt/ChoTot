import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Input } from 'native-base';

// import SearchBar from './SearchBar';

import { Cities_VN, Cities } from '../utils/data';
import { change_alias } from '../utils/functions';
import Colors from '../constants/Colors';

export default class ModalPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: '',
        };
    };

    onChangeValueSearch = (city) => {
        this.setState({
            valueSearch: city,
        });
    };

    render() {
        const input = change_alias(this.state.valueSearch.toLowerCase());
        const filtered = Cities_VN.filter((city, index) => { return Cities[index].indexOf(input) != -1; });
        let options;
        if (filtered.length > 0) {
            options = filtered.map((city) => {
                return (
                    <TouchableOpacity
                        onPress={() => this.props.onPressCity(city)}
                        activeOpacity={0.5}
                        style={styles.buttonCity} key={city}
                    >
                        <Text style={styles.buttonCityText}>{city}</Text>
                    </TouchableOpacity>
                )
            })
        } else {
            options = <TouchableOpacity style={styles.buttonCity} >
                <Text style={styles.notFoundText}>- Không có kết quả phù hợp -</Text>
            </TouchableOpacity>
        }

        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Input
                        style={styles.textSearch}
                        value={this.state.valueSearch}
                        placeholder={'Tìm vùng bạn ở'}
                        placeholderTextColor={'#222222'}
                        onChangeText={(city) => this.onChangeValueSearch(city)}
                    />
                    <Icon name="ios-search" style={styles.iconSearch} />
                </View>
                {/* <SearchBar
                    placeholder="Tìm vùng bạn ở"
                    onChangeText={(city) => this.onChangeValueSearch(city)}
                /> */}
                <ScrollView>
                    {options}
                </ScrollView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    buttonCity: {
        justifyContent: 'center',
        height: 55,
        borderBottomWidth: 0.5,
        borderColor: '#aaa',
        marginHorizontal: 20
    },

    buttonCityText: {
        marginHorizontal: 15,
        fontSize: 15
    },

    notFoundText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
    },

    container: {
        width: '90%',
        maxHeight: '98%',
        backgroundColor: 'white',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    searchContainer: {
        height: 55,
        backgroundColor: Colors.choTotColor2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    textSearch: {
        marginLeft: 20,
        paddingLeft: 15,
        letterSpacing: 1.2,
        height: '70%',
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 15,
    },

    iconSearch: {
        margin: 10,
        fontSize: 28
    },
});
