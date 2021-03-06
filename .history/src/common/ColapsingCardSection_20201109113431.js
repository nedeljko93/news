import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const ColapsingCardSection = (props) => {
 
    return (
    
            <View style={width = contaienrStyle, !props.isVisible ? { height: null } : { height: 0 }}>
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
        position: 'relative',

    }
})

export { ColapsingCardSection };