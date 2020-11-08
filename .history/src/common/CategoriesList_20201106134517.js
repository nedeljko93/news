import React from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import { Text, StyleSheet } from "react-native"

const CategoriesList = ({ name, list }) => {
    return (
        <Card>
            <CardSection>
                <Text>{name}</Text>
                <Text>Colapse</Text>
            </CardSection>
        </Card>
    )
}
export default CategoriesList;
