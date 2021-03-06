import React from 'react';
import { Text, StyleSheet, Image, Dimensions, View } from 'react-native';
import {CardSectionHorizontalList} from './'

const ItemHorizontal = ({ article }) => {
    return (
        <View style={styles.containerStyle}>
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
    containerStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
    },
    imageStyleBig: {
        flex: 1,
        width: null,
        height: 200,
    },
    descriptionStyle: {
        flex: 1,
        width: null,
        padding: 5
    },
    titleStyles: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        flex: 1,
        width: null,
        padding: 5
    }
})
export { ItemHorizontal };