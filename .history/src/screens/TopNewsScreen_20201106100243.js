import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'


class TopNewsScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <CustomTextInput
                        placeHolderValue="Search"
                    />
                </CardSection>

            </Card>
        )
    }
}

export default TopNewsScreen;