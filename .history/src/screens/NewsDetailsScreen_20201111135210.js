import React, { Component } from 'react';
import { View, Text, styleSheet } from 'react-native';
import { NewsItem } from "../common"


class NewsDetailsScreen extends Component {

    render() {

        return (
            <View>
                <NewsItem article={this.props.navigation.getParam("article")} isDetails={true} />
            </View>
        )
    }
}
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