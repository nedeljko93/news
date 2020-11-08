import React from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, Dimensions, ScrollView } from "react-native"

import CardSectionHorizontalList from './CardSection'

const CategoriesList = ({ name, list }) => {
    return (
        <Card>
            <CardSection>
                <Text>{name}</Text>
                <Text style={styles.iconStyle}>Colapse</Text>
            </CardSection>
            <CardSection>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        list.map((item) =>
                        <ItemHorizontal article={item}/>)
                    }
                </ScrollView>
            </CardSection>
        </Card>
    )
}
const styles = StyleSheet.create({

})
export default CategoriesList;
