import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NewsItem from "../common/NewsItem"


class NewsDetailsScreen extends Component {

    render() {

        return (
            <View>
                <NewsItem article={this.props.navigation.getParam("article")} isDetails={true} />
            </View>
        )
    }
}

export default NewsDetailsScreen;