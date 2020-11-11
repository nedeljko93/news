import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NewsItem } from "../common"


class NewsDetailsScreen extends Component {
    state = {
        article: {},
    }
    render() {

        return (
            <View>
                <Text style={styles.title}>{this.state.article}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingStart: 10,

    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    },
})
NewsDetailsScreen.navigationOptions = () => {
    return {
        title: 'News details',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: { backgroundColor: '#006bb3' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    }
}
export default NewsDetailsScreen;