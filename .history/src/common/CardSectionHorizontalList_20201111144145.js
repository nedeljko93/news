import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CardSectionHorizontalList = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={width = contaienrStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
        flex: 1,
        width: null,
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'stretch',
        borderColor: '#006bb3',
        position: 'relative'

    }
})

export { CardSectionHorizontalList };