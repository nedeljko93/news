import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card } from './Card'
import { CardSection } from './CardSection'

const NewsItem = ({ article, navigation, isDetails }) => {
    return (
        <Card>
            <CardSection>
                <Text style={styles.title}>{article.title}</Text>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyleBig}
                    source={{ uri: article.urlToImage }} />
            </CardSection>
            <CardSection>
                <Text style={styles.contentStyle}>
                    {isDetails ? article.content : article.description}
                </Text>
            </CardSection>
            {isDetails ? null :
                <TouchableOpacity onPress={() => navigation.navigate("NewsDetails", { article: article })}>
                    <Text style={styles.textLink}>see more</Text>
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
    },
    textLink: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: "#006bb3",
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        paddingStart: 10,
        marginVertical:5,
    },
    contentStyle: {
        paddingStart: 10,
        textAlign: 'center',
        paddingBottom: 5,
    }
})
export { NewsItem };