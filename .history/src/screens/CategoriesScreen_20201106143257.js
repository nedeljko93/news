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
        newsApi.get("?country=us&category=health")
            .then(response => {
                this.setState({ healthArticles: response.data.articles })
                newsApi.get("?country=us&category=general")
                    .then(response => {
                        this.setState({ generalArticles: response.data.articles })
                        newsApi.get("?country=us&category=science")
                            .then(response => {
                                this.setState({ scienceArticles: response.data.articles })
                                newsApi.get("?country=us&category=sports")
                                    .then(response => {
                                        this.setState({ sportArticles: response.data.articles })
                                        newsApi.get("?country=us&category=technology")
                                            .then(response => {
                                                this.setState({ technologyArticles: response.data.articles })

                                                console.log("Number of enter", entertaimentArticles.length)


                                            }
                                            )
                                    })
                            })
                    })
            }
            )




    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Header headerTxt="Categories" />
                    <CardSection>
                        <CategoriesList name="Entertainment" list={this.state.entertaimentArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="General" list={this.state.generalArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Health" list={this.state.healthArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Science" list={this.state.scienceArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Sport" list={this.state.sportArticles.slice(0, 5)} />
                    </CardSection>

                    <CardSection>
                        <CategoriesList name="Technology" list={this.state.technologyArticles.slice(0, 5)} />
                    </CardSection>
                </ScrollView>
            </View>
        )
    }
}

export default CategoriesScreen;