import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'redux';
import { loadOneCategory } from '../redux/Actions';

class CategoryScreen extends Component {
    render() {
        return (
            <View>
                <Text>Category Screen</Text>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        category: state.category,
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadOneCategory })(CategoryScreen);