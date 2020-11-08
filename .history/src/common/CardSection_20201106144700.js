import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CardSection = (props) => {
    const w = Dimensions.get("window").width;
    const { contaienrStyle } = styles;
    return (
        <View style={width = w}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contaienrStyle: {
        width: w,
        alignSelf: "stretch",
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
})

export { CardSection };