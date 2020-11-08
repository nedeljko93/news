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
        flex: 1,
        width: null,
        height: 200
    }
})
export default CategoriesList;
