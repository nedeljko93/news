import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = ({ headerTxt }) => {
    const { container, textHeader } = styles;


    return (
        < View style={container}>
            <Text style={textHeader}>{headerTxt}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
    },
    textHeader: {
        fontSize: 20,
        fontStyle: 'italic',
    }
});

export { Header };
