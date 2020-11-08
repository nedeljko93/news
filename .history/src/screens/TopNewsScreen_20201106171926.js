import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { CustomTextInput } from '../common/CustomTextInput'
import NewsItem from '../common/NewsItem'
import { loadTopNews } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'


class TopNewsScreen extends Component {

    componentDidMount() {
        this.props.loadTopNews(US)
    }

    render() {
        return (
            <Card>
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
        topNews: state.topNews
    }
}
export default connect(mapStateToProps, { loadTopNews })(TopNewsScreen);