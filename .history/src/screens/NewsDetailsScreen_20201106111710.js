import React, { Component } from 'react';
import { View, Text } from 'react-native';


class NewsDetailsScreen extends Component {
    
    render() {
        
        return (
            <View>
                <Text>{this.props.navigation.getParam("article").title}</Text>
            </View>
        )
    }
}

export default NewsDetailsScreen;