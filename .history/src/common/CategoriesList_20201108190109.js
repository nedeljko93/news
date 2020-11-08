import React, { useState } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"


const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibile] = useState(false);

    return (
        <Card>
            <CardSection >
                <Text>{name}</Text>
                <TouchableOpacity onPress={() => setVisibile(!isVisible)}>
                    <Text style={styles.iconStyle}>Colapse</Text>
                </TouchableOpacity>
            </CardSection>
            <ColapsingCardSection isVisible={isVisible} >
                <FlatList
                    horizontal={true}
                    data={list}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return <ItemHorizontal article={item} />
                    }}
                />
            </ColapsingCardSection>
        </Card>
    )
}
const styles = StyleSheet.create({

})
export default CategoriesList;
