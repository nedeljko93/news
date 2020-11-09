import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { loadTopNews, loadCategories } from '../redux/Actions'
import { US, GB } from '../redux/constants'

class CountrySelection extends Component {
    constructor(props) {
        super(props)
    }
    onCountryStatChange() {
        if (this.props.isTopNewsScreen) {
            this.props.isUS ?
                this.props.loadTopNews(GB, false) : this.props.loadTopNews(US, false)
        } else {

            this.props.isUS ? this.props.loadCategories(GB, false) : this.props.loadCategories(US, false)
        }

    }
    render() {
        console.log("CS " + this.props.isUS)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onCountryStatChange.bind(this)} disabled={!this.props.isUS} >
                    <Text style={this.props.isUS ? styles.active : styles.inactive}>GB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onCountryStatChange.bind(this)} disabled={this.props.isUS} >
                    <Text style={this.props.isUS ? styles.inactive : styles.active}>US</Text>
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
    active: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        backgroundColor: '#006bb3',
    },
    inactive: {
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        backgroundColor: '#e0e0eb'
    }
})

const mapStateToProps = state => {
    return {
        isUS: state.isUS
    }
}
export default connect(mapStateToProps, { loadTopNews, loadCategories })(CountrySelection);