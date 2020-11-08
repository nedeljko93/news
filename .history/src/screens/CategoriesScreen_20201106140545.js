import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common/Header'
import CategoriesList from "../common/CategoriesList"
import { Card } from "../common/Card"
import { CardSection } from "../common/CardSection"
import newsApi from '../api/newsApi';


class CategoriesScreen extends Component {
    state = {
        entertaimentArticles: [],
        generalArticles: [],
        healthArticles: [],
        scienceArticles: [],
        sportArticles: [],
        technologyArticles: []
    }
    componentDidMount() {
        newsApi.get("?country=us&category=health")
            .then(response =>
                this.setState({ healthArticles: response.data.articles })
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
                    <CategoriesList name="Health" list={this.state.healthArticles} />
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