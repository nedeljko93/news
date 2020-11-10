import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { US, GB, CATEGORY } from '../redux/constants'
import { connect } from 'react-redux';
import { loadOneCategory } from '../redux/Actions';
import NewsItem from '../common/NewsItem'
import CountrySelection from '../classComponents/CountrySelection'


class CategoryScreen extends Component {
    componentDidMount() {

        var cat = this.props.navigation.getParam(CATEGORY)
        console.log(cat)
        this.props.isUS ?
            this.props.loadOneCategory(US, cat, true) : this.props.loadOneCategory(GB, cat, true)
    }

    render() {
        return (
            <View>
                <CountrySelection />
                <FlatList
                    data={this.props.categoryList}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return <NewsItem article={item} navigation={this.props.navigation} isDetails={true} />
                    }}
                />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        category: state.categoryList,
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadOneCategory })(CategoryScreen);