import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const ArticlesNavigation = ({ onPressNext, onPressPrevious ,isVisible}) => {
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
}
const styles = StyleSheet.create({
    itemNavigation: {
        width: null,
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