import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article, navigation }) => {
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
            <CardSection>
                <TouchableOpacity onPress={()=> navigation.navigate("NewsDetails")}>
                    <Text>More</Text>
                </TouchableOpacity>
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