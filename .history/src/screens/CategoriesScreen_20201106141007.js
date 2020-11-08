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
            .then(response => {
                this.setState({ healthArticles: response.data.articles })
                newsApi.get("?country=us&category=entertainment")
                    .then(response =>
                        this.setState({ entertaimentArticles: response.data.articles })
                    )
            }
            )

        newsApi.get("?country=us&category=general")
            .then(response =>
                this.setState({ generalArticles: response.data.articles })
            )
        newsApi.get("?country=us&category=science")
            .then(response =>
                this.setState({ scienceArticles: response.data.articles })
            )
        newsApi.get("?country=us&category=sports")
            .then(response =>
                this.setState({ sportArticles: response.data.articles })
            )
        newsApi.get("?country=us&category=technology")
            .then(response =>
                this.setState({ technologyArticles: response.data.articles })
            )

    }
    render() {
        return (
            <View>
                <Header headerTxt="Categories" />
                <CardSection>
                    <CategoriesList name="Entertainment" list={this.props.entertaimentArticles} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="General" list={this.props.generalArticles} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Health" list={this.state.healthArticles} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Science" list={this.state.scienceArticles} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Sport" list={this.state.sportArticles} />
                </CardSection>

                <CardSection>
                    <CategoriesList name="Technology" list={this.state.technologyArticles} />
                </CardSection>
            </View>
        )
    }
}

export default CategoriesScreen;