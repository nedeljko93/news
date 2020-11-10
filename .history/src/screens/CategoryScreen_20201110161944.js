import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { US, GB , CATEGORY } from '../redux/constants'
import { connect } from 'redux';
import { loadOneCategory, loadTopNews } from '../redux/Actions';

class CategoryScreen extends Component {
    componentDidMount() {
        var category = this.props.navigation.getParam(CATEGORY)
        this.props.isUS ?
            this.props.loadOneCategory(US, true) : this.props.loadOneCategory(GB, true)
    }

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