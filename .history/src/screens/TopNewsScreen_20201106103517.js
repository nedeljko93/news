import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import newsApi from '../api/newsApi';


class TopNewsScreen extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        newsApi.get("?country=us")
        .then(response=>console.log(response.data))
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
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return <Text>{item.title}</Text>
                        }}
                    />
                    <Text></Text>
                </CardSection>

            </Card>
        )
    }
}

export default TopNewsScreen;