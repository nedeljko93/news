import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';


const animationHeight = React.useRef(new Animated.Value(2)).current;
useEffect(() => {
    if (isVisible) {
        Animated.timing(animationHeight, {
            duration: 1000,
            toValue: 60,
            easing: Easing.linear
        }).start();
    }
    else {
        Animated.timing(animationHeight, {
            duration: 1000,
            toValue: 5,
            easing: Easing.linear
        }).start();
    }
}, [isVisible])
const ColapsingCardSection = (props) => {
    const { contaienrStyle } = styles;
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