import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import CategoriesList from "../common/CategoriesList"
import { CardSection } from "../common/CardSection"
import {  countryHasChanged } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../classComponents/CountrySelection'
import {
    CATEGORY_ENTERTAINMENT,
    CATEGORY_GENERAL,
    CATEGORY_HEALTH,
    CATEGORY_SCIENCE,
    CATEGORY_SPORTS,
    CATEGORY_TECHNOLOGY
} from "../redux/constants"

class CategoriesScreen extends Component {

    render() {
        return (
            <View style={{ paddingBottom: 40 }}>
                <CardSection>
                    <CountrySelection
                        isOneCategoryScreen={false}
                        isUS={this.props.isUS} />
                </CardSection>

                <ScrollView >
                    <CardSection>
                        <CategoriesList
                            name="Entertainment"
                            list={this.props.list.entertainmentList}
                            navigation={this.props.navigation}
                            category={CATEGORY_ENTERTAINMENT} />
                    </CardSection>


                    <CardSection>
                        <CategoriesList
                            name="General"
                            list={this.props.list.generalList}
                            navigation={this.props.navigation}
                            category={CATEGORY_GENERAL} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList
                            name="Health"
                            list={this.props.list.healthList}
                            navigation={this.props.navigation}
                            category={CATEGORY_HEALTH} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList
                            name="Science"
                            list={this.props.list.scienceList}
                            navigation={this.props.navigation}
                            category={CATEGORY_SCIENCE} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList
                            name="Sport"
                            list={this.props.list.sportList}
                            navigation={this.props.navigation}
                            category={CATEGORY_SPORTS} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList
                            name="Technology"
                            list={this.props.list.technologyList}
                            navigation={this.props.navigation}
                            category={CATEGORY_TECHNOLOGY} />
                    </CardSection>

                </ScrollView >
            </View >
        )
    }
}
CategoriesScreen.navigationOptions = () => {
    return {
        title: 'News Categories',
        headerTitleStyle: { alignSelf: 'center' },
        headerStyle: { backgroundColor: '#006bb3' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, {  countryHasChanged })(CategoriesScreen);