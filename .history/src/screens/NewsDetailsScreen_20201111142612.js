import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'
import { NewsItem } from "../common"


class NewsDetailsScreen extends Component {
    state = {
        article: this.props.navigation.getParam("article")
    }
    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{this.state.article.title}</Text>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.state.article.urlToImage }}
                    />
                    <Text style={styles.contentText}
                        numberOfLines={40}>
                        {this.state.article.content}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: null,
        width: null
    },
    title: {
        flex: 1,
        fontSize: 20,
        paddingStart: 10,
    },
    imageStyle: {
        width: null,
        height: 300,
    },
    contentText: {
        flex: 1
        paddingStart: 10,
        paddingTop: 10,
        borderColor: 'black',
        borderWidth: 4,
        height: 400
    }
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