import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../common/Header'
import CategoriesList from "../common/CategoriesList"
import { CardSection } from "../common/CardSection"
import newsApi from '../api/newsApi';
import { loadCategories, countryHasChanged } from '../redux/Actions'
import { connect } from 'react-redux';


class CategoriesScreen extends Component {

    componentDidMount() {
        this.props.loadCategories("us");
    }


    render() {

        return (
            <View>
                <ScrollView>
                    <Header headerTxt="Categories" />


                    <CardSection>
                        <CategoriesList name="Entertainment" list={this.props.list.entertainmentList.slice(0, 5)} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="General" list={this.props.list.generalList.slice(0, 5)} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Health" list={this.props.list.healthList.slice(0, 5)} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Science" list={this.props.list.scienceList.slice(0, 5)} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Sport" list={this.props.list.sportList.slice(0, 5)} />
                    </CardSection>



                    <CardSection>
                        <CategoriesList name="Technology" list={this.props.list.technologyList.slice(0, 5)} />
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