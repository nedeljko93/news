import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article, navigation, isDetails }) => {
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
                <Text multiline={true}
                    numberOfLines={30}>
                    {isDetails ? article.content.substring(0, 260) : article.description}
                </Text>
            </CardSection>
            {isDetails ? null : <CardSection>
                <TouchableOpacity onPress={() => navigation.navigate("NewsDetails", { article: article })}>
                    <Text>More</Text>
                </TouchableOpacity>
            </CardSection>}
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