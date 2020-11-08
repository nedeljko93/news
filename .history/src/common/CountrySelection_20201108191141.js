import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class CountrySelection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={isUS ? styles.inactive : styles.active}>GB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Text style={isUS ? styles.active : styles.inactive}>US</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    active: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    inactive: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        backgroundColor: '#e0e0eb'
    }
})
export default CountrySelection;