import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../common/Header'
import { CustomTextInput } from '../common/CustomTextInput'


class TopNewsScreen extends Component {
    render() {
        return (
            <View>
                <Header headerTxt="Top news" />
                <CustomTextInput
                    placeHolderValue="Search"
                />

            </View>
        )
    }
}

export default TopNewsScreen;