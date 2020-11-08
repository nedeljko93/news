import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'


class TopNewsScreen extends Component {
    componentDidMount(){

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
                <FlatList />
                <Text></Text>
            </CardSection>

        </Card>
    )
}
}

export default TopNewsScreen;