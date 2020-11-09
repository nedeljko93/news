import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const ArticlesNavigation = ({ onPressNext, onPressPrevious }) => {
    return (
        <View style={styles.itemNavigation} >
            <TouchableOpacity onPress={onPressPrevious}>
                <Image
                    style={styles.navImages}
                    source={require('../res/ic_previous.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNext}>
                <Image
                    style={styles.navImages}
                    source={require('../res/ic_next.png')} />
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    itemNavigation: {
        justifyContent: 'center',
        flexDirection: 'row'

    },
    navImages: {
        width: 30,
        height: 30,
        margin: 5
    }
})
export default ArticlesNavigation;