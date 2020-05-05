/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
class Screen2 extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}> Screen2</Text>
            </View>
        );
    }
}
export default Screen2;