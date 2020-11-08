import React from 'react';
import { View, Text, StyleSheet, TouchebleOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article }) => {
    return (
        <Card>
            <CardSection>
                <Text>{article.title}</Text>
            </CardSection>
        </Card>
    )
}

export default NewsItem;