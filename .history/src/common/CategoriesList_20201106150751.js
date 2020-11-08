import React from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, Dimensions, FlatList } from "react-native"

const CategoriesList = ({ name, list }) => {
    return (
        <Card>
            <CardSection>
                <Text>{name}</Text>
                <Text style={styles.iconStyle}>Colapse</Text>
            </CardSection>
            <CardSection>
                <FlatList
                    horizontal={true}
                    data={list}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return <ItemHorizontal article={item} />
                    }}
                />
            </CardSection>
        </Card>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        marginStart: 50,
        height: 20,
        alignSelf: 'flex-end'
    }
})
export default CategoriesList;
