import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { US, GB, CATEGORY } from '../redux/constants'
import { connect } from 'react-redux';
import { loadData } from '../redux/Actions';
import { NewsItem, CardSection } from '../common'
import CountrySelection from '../classComponents/CountrySelection'


class CategoryScreen extends Component {
    componentDidMount() {

        var cat = this.props.navigation.getParam(CATEGORY)
        this.props.isUS ?
            this.props.loadData(US, true, cat, true) : this.props.loadData(GB, true, cat, true)
    }

    render() {
        return (
            <View>
                <CardSection>
                    <CountrySelection
                        isOneCategoryScreen={true}
                        category={this.props.navigation.getParam(CATEGORY)}
                        isUS={this.props.isUS} />
                </CardSection>
                <CardSection>
                    <FlatList
                        data={this.props.list.categoryList}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return <NewsItem article={item} navigation={this.props.navigation} isDetails={true} />
                        }}
                    />
                </CardSection>
            </View>
        )
    }
}
CategoryScreen.navigationOptions = () => {
    return {
        title: 'Category',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: { backgroundColor: '#006bb3' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    }
}
const mapStateToProps = state => {
    return {
        categoryList: state.categoryList,
        isUS: state.isUS.isUS,
        list: state.list
    }
}
export default connect(mapStateToProps, { loadData })(CategoryScreen);