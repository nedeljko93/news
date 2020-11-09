import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import { Card } from './Card'
import CardSectionHorizontalList from './CardSectionHorizontalList'

const ItemHorizontal = ({ article }) => {
    return (
        <View>
            <CardSectionHorizontalList>
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.titleStyles}>
                    {article.title}</Text>
            </CardSectionHorizontalList>
            <CardSectionHorizontalList>
                <Image
                    style={styles.imageStyleBig}
                    source={{ uri: article.urlToImage }} />
            </CardSectionHorizontalList>

            <Text style={styles.descriptionStyle}>
                {article.description}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    imageStyleBig: {
        flex: 1,
        width: "100%",
        height: 200,
    },
    descriptionStyle: {
        flex: 1,
        width: Dimensions.get('window').width * 90 / 100,
        padding: 5
    },
    titleStyles: {
        textAlign:'center',
        fontSize: 18,
        fontStyle: 'italic',
        flex: 1,
        width: Dimensions.get('window').width * 90 / 100,
        padding: 5
    }
})
export default ItemHorizontal;