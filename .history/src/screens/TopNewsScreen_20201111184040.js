import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, CardSection, CustomTextInput, NewsItem, Spinner } from '../common';
import { loadData } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../classComponents/CountrySelection'


class TopNewsScreen extends Component {


    componentDidMount() {
        this.props.isUS ?
            this.props.loadData(US, true, '', false) : this.props.loadData(GB, true, '', false)
    }

    renderList() {
        console.log(this.props.loading)
        if (this.props.loading)
            return <Spinner />
        else {
            return (

                <FlatList
                    data={this.props.list.topNewsList}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return <NewsItem article={item} navigation={this.props.navigation} isDetails={false} />


                    }}

                />)
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <CountrySelection
                        isOneCategoryScreen={false}
                        isUS={this.props.isUS} />
                </CardSection>
                <CardSection>
                    <CustomTextInput

                        placeHolderValue="Search"
                    />
                </CardSection>
                <Spinner size='large' />


                {this.renderList()}


            </Card>
        )
    }
}
TopNewsScreen.navigationOptions = () => {
    return {
        title: 'Top news',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: { backgroundColor: '#006bb3' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    }
}
const mapStateToProps = state => {
    return {
        topNews: state.topNews,
        isUS: state.isUS,
        list: state.list,
        loading: state.loading,
    }
}
export default connect(mapStateToProps, { loadData })(TopNewsScreen);