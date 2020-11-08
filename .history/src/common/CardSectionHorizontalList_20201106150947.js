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
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
})

export default CardSectionHorizontalList;