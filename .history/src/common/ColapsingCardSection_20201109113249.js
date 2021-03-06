import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const ColapsingCardSection = (props) => {
    const { contaienrStyle } = styles;

    const animationHeight = React.useRef(new Animated.Value(1)).current;
    useEffect(() => {
        if (props.isVisible) {
            Animated.timing(animationHeight, {
                duration: 1000,
                toValue: null,
                easing: Easing.linear
            }).start();
        }
        else {
            Animated.timing(animationHeight, {
                duration: 1000,
                toValue: 0,
                easing: Easing.linear
            }).start();
        }
    }, [props.isVisible])
    return (
        <Animated.View style={[{ height: animationHeight }]}>
            <View style={width = contaienrStyle, !props.isVisible ? { height: null } : { height: 0 }}>
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