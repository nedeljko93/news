import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const CountrySelection = ({ }) => {
    return (
        <View style={styles.container}>
            <Text>EN</Text>
            <Text>GB</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 60,
        flexDirection:'row',
        justifyContent: 'center',
    }
})
export default CountrySelection;