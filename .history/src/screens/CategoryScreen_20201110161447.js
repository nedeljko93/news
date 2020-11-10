import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'redux';
import { loadOneCategory } from '../redux/Actions'

class CategoryScreen extends Component {
    render() {
        return (
            <View>
                <Text>Category Screen</Text>
            </View>
        )
    }
}
export default CategoryScreen;