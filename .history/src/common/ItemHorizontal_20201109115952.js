import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import { Card } from './Card'
import CardSectionHorizontalList from './CardSectionHorizontalList'

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

            <Text style={styles.descriptionStyle}>
                {article.description}
            </Text>

        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyleBig: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 200,
    },
    descriptionStyle: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
})
export default ItemHorizontal;