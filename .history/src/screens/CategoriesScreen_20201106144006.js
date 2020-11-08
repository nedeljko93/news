import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
        newsApi.get("?country=us&category=entertainment")
            .then(response => {
                this.setState({ entertaimentArticles: response.data.articles })

                newsApi.get("?country=us&category=general")
                    .then(response => {
                        this.setState({ generalArticles: response.data.articles })

                        newsApi.get("?country=us&category=health")
                            .then(response => {
                                this.setState({ healthArticles: response.data.articles })

                                newsApi.get("?country=us&category=science")
                                    .then(response => {
                                        this.setState({ scienceArticles: response.data.articles })

                                        newsApi.get("?country=us&category=sport")
                                            .then(response => {
                                                this.setState({ sportArticles: response.data.articles })

                                                newsApi.get("?country=us&category=technology")
                                                    .then(response => {
                                                        this.setState({ technologyArticles: response.data.articles })
                                                    })
                                            })
                                    })
                            })
                    })
            }
            )




    }

    render() {
        const { entertaimentArticles, generalArticles, healthArticles, scienceArticles, sportArticles, technologyArticles } = this.state;
        return (
            <View>
                <ScrollView>
                    <Header headerTxt="Categories" />
                    <CardSection>
                        <CategoriesList name="Entertainment" list={entertaimentArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="General" list={generalArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Health" list={healthArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Science" list={scienceArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Sport" list={sportArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Technology" list={technologyArticles.slice(0, 5)} />
                    </CardSection>
                </ScrollView>
            </View>
        )
    }
}

export default CategoriesScreen;