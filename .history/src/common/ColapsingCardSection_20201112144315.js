import React from 'react';
import { View, StyleSheet, Animated, } from 'react-native';

const ColapsingCardSection = (props) => {

    return (
        <Animated.View style={[{ height: null }]}>
            <View style={styles.viewStyle, !props.isVisible ? { height: null } : { height: 0 }}>
                {props.children}
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

    }
})

export { ColapsingCardSection };