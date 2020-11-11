import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NewsItem } from "../common"


class NewsDetailsScreen extends Component {
    state = {
        article:({title:'asdas'})
    }
    componentDidMount() {
        var art = this.props.navigation.getParam("article");
        console.log(art)
 this.setState({ article: art})
    }
    render() {

        return (
            <View>
                <Text style={styles.title}></Text>

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