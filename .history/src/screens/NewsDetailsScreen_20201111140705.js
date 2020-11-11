import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NewsItem } from "../common"


class NewsDetailsScreen extends Component {
    state = {
        article: this.props.navigation.getParam("article")
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.article.title}</Text>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: this.state.article.urlToImage }}
                />
                <Text>
                {this.state.article.content}
                </Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    
        height: null,
        width: null
    },
    title: {
        flex:1,
        fontSize: 20,
        paddingStart: 10,
        

    },
    imageStyle: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: 'black',

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