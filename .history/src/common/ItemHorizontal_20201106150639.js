import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Card } from './Card'
import { CardSectionHorizontalList } from './CardSectionHorizontalList'

const ItemHorizontal = ({ article }) => {
    return (
        <Card>
            <CardSectionHorizontalList>
                <Text>{article.title}</Text>
            </CardSectionHorizontalList>
            <CardSectionHorizontalList>
                <Image
                    style={styles.imageStyleBig}
                    source={{ uri: article.urlToImage }} />
            </CardSectionHorizontalList>
            <CardSectionHorizontalList>
                <Text>
                    {article.description}
                </Text>
            </CardSectionHorizontalList>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyleBig: {
        flex: 1,
        width: null,
        height: 200
    }
})
export default ItemHorizontal;