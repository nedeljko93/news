import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../common/Header'
import { Card } from '../common/Card'
import CategoriesList from "../common/CategoriesList"
import { CardSection } from "../common/CardSection"
import { loadCategories, countryHasChanged } from '../redux/Actions'
import { connect } from 'react-redux';
import { US, GB } from '../redux/constants'
import CountrySelection from '../classComponents/CountrySelection'


class CategoriesScreen extends Component {

    componentDidMount() {
        this.props.isUS ? this.props.loadCategories(US, true) : this.props.loadCategories(GB, true)
    }


    render() {

        return (
            <View>
                <ScrollView>
                    <CardSection>
                        <CountrySelection isTopNewsScreen={false} />
                    </CardSection>
                    <CardSection>
                        <CategoriesList name="Entertainment" list={this.props.list.entertainmentList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="General" list={this.props.list.generalList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Health" list={this.props.list.healthList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Science" list={this.props.list.scienceList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Sport" list={this.props.list.sportList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Technology" list={this.props.list.technologyList.slice(0, 5)} navigation={this.props.navigation} />
                    </CardSection>

                </ScrollView >
            </View >
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadCategories, countryHasChanged })(CategoriesScreen);