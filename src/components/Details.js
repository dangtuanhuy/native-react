/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
class Details extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}> Details Screen in Stack Navigator</Text>
            </View>
        );
    }
}
export default Details;
