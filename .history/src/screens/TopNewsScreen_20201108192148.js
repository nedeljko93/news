import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import { loadTopNews } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../common/CountrySelection'


class TopNewsScreen extends Component {
    
    componentDidMount() {
        this.props.isUS ?
            this.props.loadTopNews(US) : this.props.loadTopNews(GB)
    }

    render() {
        console.log("render")
        return (
            <Card>
                <CardSection>
                    {/* <CountrySelection /> */}
                </CardSection>
                <CardSection>
                    <CustomTextInput
                        placeHolderValue="Search"
                    />
                </CardSection>
                <CardSection>
                    <FlatList
                        data={this.props.topNews}
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
const mapStateToProps = state => {
    return {
        topNews: state.topNews,
    }
}
TopNewsScreen.navigationOptions = () => {
    return {
        title: "Top news",
        tabBarIcon: <Image source={require('../res/ic_star.png')} size={20} />
    }
}
export default connect(mapStateToProps, { loadTopNews })(TopNewsScreen);