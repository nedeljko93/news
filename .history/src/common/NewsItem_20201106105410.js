import React from 'react';
import { Text, StyleSheet, TouchebleOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ title }) => {
    return (
        <Card>
            <CardSection>
                <Text>{title}</Text>
            </CardSection>
        </Card>
    )
}

export default NewsItem;