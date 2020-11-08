import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header} from '../common/Header'


class CategoriesScreen extends Component{
    render(){
        return(
            <Header>
                <Text>Categories</Text>
            </Header>
        )
    }
}

export default CategoriesScreen;