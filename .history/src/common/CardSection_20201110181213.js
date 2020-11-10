import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CardSection = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={width = contaienrStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#006bb3',
        position: 'relative',
    }
})

export { CardSection };