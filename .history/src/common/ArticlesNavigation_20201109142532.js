import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const ArticlesNavigation = ({ onPressNext, onPressPrevious, isVisible }) => {
    if (isVisible) {
        return (
            <View style={styles.itemNavigation} >
                <TouchableOpacity onPress={onPressPrevious}>
                    <Image
                        style={styles.navImages}
                        source={require('../res/ic_minimize.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressNext}>
                    <Image
                        style={styles.navImages}
                        source={require('../res/ic_plus.png')} />
                </TouchableOpacity>
            </View>
        )
    } else {
        return null;
    }
}
const styles = StyleSheet.create({
    itemNavigation: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    navImages: {
        width: 20,
        height: 20,
        margin: 5
    }
})
export default ArticlesNavigation;