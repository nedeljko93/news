import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const CountrySelection = ({ isUS, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text>GB</Text>
            </TouchableOpacity>
        </View >
    )

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
        backgroundColor: '#809fff',
    },
    inactive: {
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: '#ff5050'
    }
})
export default CountrySelection;