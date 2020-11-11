import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size='large' animating={true} color='#006bb3' />
        </View>
    );
};
const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
    }
});
export { Spinner };