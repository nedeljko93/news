import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeHolderValue, isSecureTextEntry }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={isSecureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeHolderValue}
                autoCorrect={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {

        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    containerStyle: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    }
})
export { CustomTextInput };