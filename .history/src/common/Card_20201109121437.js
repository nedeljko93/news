import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Card = (props) => {
    const { contaienrStyle } = styles;
    return (
        <View style={contaienrStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
        width: Dimensions.get('window').width * 90 / 100,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingBottom: 10
    }
})

export { Card };