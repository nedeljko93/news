import React from 'react';
import {  Text, StyleSheet, TouchebleOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article }) => {
    console.log(article)
    return (
        <Card>
            <CardSection>
                <Text></Text>
            </CardSection>
        </Card>
    )
}

export default NewsItem;