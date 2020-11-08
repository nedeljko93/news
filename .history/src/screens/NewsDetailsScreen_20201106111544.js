import React, { Component } from 'react';
import { View, Text } from 'react-native';


class NewsDetailsScreen extends Component {
    
    render() {
        console.log(this.props.navigation.getParam("article"))
        return (
            <View>
                <Text>Details</Text>
            </View>
        )
    }
}

export default NewsDetailsScreen;