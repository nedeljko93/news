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
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#555555',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'stretch',
        borderColor: '#ddd',
        position: 'relative'

    }
})

export default CardSectionHorizontalList;