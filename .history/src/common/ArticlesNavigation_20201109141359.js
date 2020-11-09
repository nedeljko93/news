import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const ArticlesNavigation = ({ onPressNext, onPressPrevious }) => {
    return (
        <View style={styles.itemNavigation}>
            <TouchableOpacity onPress={onPressPrevious}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNext}>
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