import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import { loadTopNews } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../classComponents/CountrySelection'


class TopNewsScreen extends Component {

    componentDidMount() {
        this.props.isUS ?
            this.props.loadTopNews(US, true) : this.props.loadTopNews(GB, true)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <CountrySelection
                        isOneCategoryScreen={false}
                        isTopNewsScreen={true}
                        isCategoriesScreen={false}
                        isUS={this.props.isUS } />
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
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadTopNews })(TopNewsScreen);