import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, CardSection, CustomTextInput } from '../common';
// import { CardSection } from '../common/CardSection';
// import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import { loadData } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../classComponents/CountrySelection'


class TopNewsScreen extends Component {

    componentDidMount() {
        this.props.isUS ?
            this.props.loadData(US, true) : this.props.loadData(GB, true)
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
                <CardSection>
                    <FlatList
                        data={this.props.list.topNewsList}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return <NewsItem article={item} navigation={this.props.navigation} isDetails={false} />
                        }}
                    />

                </CardSection>

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
        list: state.list
    }
}
export default connect(mapStateToProps, { loadData })(TopNewsScreen);