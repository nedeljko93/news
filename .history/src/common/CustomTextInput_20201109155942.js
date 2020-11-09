import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeHolderValue, isSecureTextEntry }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={isSecureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeHolderValue}
                autoCorrect={false}
            />
            <Image
                style={styles.image}
                source={require('../res/ic_search.png')} />
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
        height: null,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: "#ffffff",
        borderBottomWidth: 1,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    image: {
        width: 30,
        height: 30
    }
})
export { CustomTextInput };