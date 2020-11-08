import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={contaienrStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
        flex: 2,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
})

export { CardSection };