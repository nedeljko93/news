import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, children }) => {
    const { buttonStlye, textStyle } = styles;
    return (

        <TouchableOpacity
            style={buttonStlye}
            onPress={onPress}
        >
            <Text style={textStyle} >{children}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonStlye: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginStart: 5,
        marginEnd: 5,
    },
    textStyle: {
        alignItems: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
})

export { CustomButton }