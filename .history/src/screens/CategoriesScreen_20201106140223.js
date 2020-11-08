import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common/Header'
import CategoriesList from "../common/CategoriesList"
import { Card } from "../common/Card"
import { CardSection } from "../common/CardSection"


class CategoriesScreen extends Component {
    componentDidMount() {
        newsApi.get("?country=us")
            .then(response =>
                this.setState({ articles: response.data.articles })
            )
    }
    render() {
        return (
            <View>
                <Header headerTxt="Categories" />
                <CardSection>
                    <CategoriesList name="Entertainment" list={null} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="General" list={null} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Health" list={null} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Science" list={null} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Sport" list={null} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Technology" list={null} />
                </CardSection>
            </View>
        )
    }
}

export default CategoriesScreen;