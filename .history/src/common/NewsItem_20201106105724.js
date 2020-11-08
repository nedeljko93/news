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
                <Image />
            </CardSection>
        </Card>
    )
}
const styles = StyleSheet.create({
    imageStyleBig: {
        width: 50,
        height: 50
    }
})
export default NewsItem;