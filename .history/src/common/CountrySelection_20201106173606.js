import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const CountrySelection = ({ slecetedCountry, onPress }) => {
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
    }
})
export default CountrySelection;