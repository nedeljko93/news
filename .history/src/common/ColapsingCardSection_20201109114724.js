import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const ColapsingCardSection = (props) => {
    const { contaienrStyle } = styles;
    return (
        <Animated.View style={[{ height: null }]}>
            <View style={syles.contaienrStyle, !props.isVisible ? { height: null } : { height: 0 }}>
                {props.children}
            </View>
        </Animated.View>
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