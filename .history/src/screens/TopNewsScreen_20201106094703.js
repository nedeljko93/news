import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header} from '../common/Header'


class TopNewsScreen extends Component{
    render(){
        return(
            <Header>
                <Text>Top news</Text>
            </Header>
        )
    }
}

export default TopNewsScreen;