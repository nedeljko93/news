import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common/Header'
import CategoriesList from "../common/CategoriesList"
import { Card } from "../common/Card"
import { CardSection } from "../common/CardSection"


class CategoriesScreen extends Component {
    render() {
        return (
            <Card>
                <Header headerTxt="Categories" />
                <CardSection>
                    <CategoriesList name="Entertainment" list={null} />
                </CardSection>
            </Card>
        )
    }
}

export default CategoriesScreen;