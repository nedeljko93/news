import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CardSection = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={contaienrStyle}>
            {props.children}
        </View>
    )
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    contaienrStyle: {
        width: width,
        alignSelf: "stretch",
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
})

export { CardSection };