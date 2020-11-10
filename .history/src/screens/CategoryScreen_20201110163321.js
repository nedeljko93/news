import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { US, GB, CATEGORY } from '../redux/constants'
import { connect } from 'react-redux';
import { loadOneCategory } from '../redux/Actions';


class CategoryScreen extends Component {
    componentDidMount() {
        
        var cat = this.props.navigation.getParam(CATEGORY)
        console.log(cat)
        // this.props.isUS ?
        
        // this.props.loadOneCategory(US, cat, true) : this.props.loadOneCategory(GB, cat, true)
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