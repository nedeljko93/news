import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CardSection = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={width = contaienrStyle, !props.isVisible ? {height: null} : {height: 0}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
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