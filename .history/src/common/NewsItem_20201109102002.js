import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
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
                <Text>
                    {isDetails ? article.content : article.description}
                </Text>
            </CardSection>
            {isDetails ? null :
                <TouchableOpacity onPress={() => navigation.navigate("NewsDetails", { article: article })}>
                    <Text>More</Text>
                </TouchableOpacity>
           }
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