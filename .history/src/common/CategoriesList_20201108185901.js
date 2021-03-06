import React, { useState } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection'
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"


const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibile] = useState(false);

    return (
        <Card>
            <CardSection isVisible={true}>
                <Text>{name}</Text>
                <TouchableOpacity onPress={() => setVisibile(!isVisible)}>
                    <Text style={styles.iconStyle}>Colapse</Text>
                </TouchableOpacity>
            </CardSection>
            <CardSection isVisible={isVisible} >
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
