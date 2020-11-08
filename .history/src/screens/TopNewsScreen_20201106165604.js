import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import newsApi from '../api/newsApi';
import { loadTopNews } from '../redux/Actions'
import { connect } from 'react-redux';


class TopNewsScreen extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        console.log("Component did mount")
        newsApi.get("?country=us").then(response => {
            console.log(response.data)
             this.props.loadTopNews(response.data.articles) })

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
                        data={this.state.topNews}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return <NewsItem article={item} navigation={this.props.navigation} isDetails={false} />
                        }}
                    />

                </CardSection>

            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        topNews: state.topNews
    }
}
export default connect(mapStateToProps, { loadTopNews })(TopNewsScreen);