import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article, navigation, isDetails }) => {
    var width = Dimensions.get('window').width;


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
        width: "100%",
        height: 200
    }
})
export default NewsItem;