import React, { useState } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"


const CategoriesList = ({ name, list }) => {
    return (
        <Card>
            <CardSection>
                <Text>{name}</Text>
                <TouchableOpacity>
                    <Text style={styles.iconStyle}>Colapse</Text>
                </TouchableOpacity>
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

})
export default CategoriesList;
