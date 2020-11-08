import React from 'react';
import { Text, StyleSheet, TouchebleOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article }) => {
    return (
        <Card>
            <CardSection>
                <Text>{article.title}</Text>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyleBig}
                    source={{ uri: article.urlToImage }} />
            </CardSection>
            <CardSection>
                <Text>{article.description}</Text>
            </CardSection>
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
export default NewsItem;