import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { loadTopNews, loadCategories, loadOneCategory } from '../redux/Actions'
import { US, GB } from '../redux/constants'

class CountrySelection extends Component {
    constructor(props) {
        super(props)
    }
    onCountryStatChange() {
        if (this.props.isTopNewsScreen) {
            this.props.isUS ? this.props.loadTopNews(GB, false) : this.props.loadTopNews(US, false)
        }
        if (this.props.isCategoriesScreen) {

            this.props.isUS ? this.props.loadCategories(GB, false) : this.props.loadCategories(US, false)
        }
        if (this.props.isOneCategoryScreen) {
            this.props.isUS ? this.props.loadOneCategory(GB, this.props.category, false) : this.props.loadOneCategory(US, this.props.category, false)
        }

    }
    render() {
        console.log("CS " + this.props.isUS)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onCountryStatChange.bind(this)} disabled={!this.props.isUS} >
                    <Text style={this.props.isUS ? styles.state1 : styles.state2}>GB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onCountryStatChange.bind(this)} disabled={this.props.isUS} >
                    <Text style={this.props.isUS ? styles.state2 : styles.state1}>US</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    state1: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        color:'grey',
        backgroundColor: '#ffffff',
    },
    state2: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        color: 'white',
        backgroundColor: '#006bb3'
    }
})

const mapStateToProps = state => {
    return {
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadTopNews, loadCategories, loadOneCategory })(CountrySelection);