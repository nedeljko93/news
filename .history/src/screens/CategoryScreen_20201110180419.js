import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { US, GB, CATEGORY } from '../redux/constants'
import { connect } from 'react-redux';
import { loadOneCategory } from '../redux/Actions';
import { CardSection } from '../common/CardSection';
import NewsItem from '../common/NewsItem'
import CountrySelection from '../classComponents/CountrySelection'
import { Card } from '../common/Card';


class CategoryScreen extends Component {
    componentDidMount() {

        var  cat = this.props.navigation.getParam(CATEGORY)
        this.props.isUS ?
            this.props.loadOneCategory(US, cat, true) : this.props.loadOneCategory(GB, cat, true)
    }

    render() {
        return (
            <View>
                <CardSection>
                    <CountrySelection 
                    isOneCategoryScreen={true} 
                    isTopNewsScreen={false} 
                    isCategoriesScreen={false}
                    category={this.props.navigation.getParam(CATEGORY)} 
                    isUS={this.props.isUS}/>
                </CardSection>
                <CardSection>
                    <FlatList
                        data={this.props.categoryList}
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
        title: 'Top news',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle:{ backgroundColor: '#006bb3'},
        headerTitleStyle:{ color: 'white'},
        headerTintColor: 'white'
    }
}
const mapStateToProps = state => {
    return {
        categoryList: state.categoryList,
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadOneCategory })(CategoryScreen);