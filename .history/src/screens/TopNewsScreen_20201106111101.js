import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import newsApi from '../api/newsApi';


class TopNewsScreen extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        newsApi.get("?country=us")
            .then(response =>
                this.setState({ articles: response.data.articles })
            )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <CustomTextInput
                        placeHolderValue="Search"
                    />
                </CardSection>
                <CardSection>
                    <FlatList
                        data={this.state.articles}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return <NewsItem article={item} navigation={this.props.navigation} />
                        }}
                    />
                    <Text></Text>
                </CardSection>

            </Card>
        )
    }
}

export default TopNewsScreen;