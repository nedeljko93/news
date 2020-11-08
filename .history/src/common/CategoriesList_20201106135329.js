import React from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import { Text, StyleSheet, Dimensions } from "react-native"

const CategoriesList = ({ name, list }) => {
    return (
        <Card>
            <CardSection>
                <Text>{name}</Text>
                <Text style={styles.iconStyle}>Colapse</Text>
            </CardSection>
        </Card>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        marginStart:50,
        height: 20,
        alignSelf: 'flex-end'
    }
})
export default CategoriesList;
