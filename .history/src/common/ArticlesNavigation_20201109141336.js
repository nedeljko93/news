import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const ArticlesNavigation = ({ onPressNext, onPressPrevious }) => {
    return (
        <View style={styles.itemNavigation}>
            <TouchableOpacity onPress={onPressNext}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressPrevious}>
                <Text>Next</Text>
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

    }
})
export default ArticlesNavigation;