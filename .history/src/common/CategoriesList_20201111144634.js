import React, { useState, useRef } from 'react';
import { Card } from './Card'
import { CardSection, ColapsingCardSection, ItemHorizontal, ArticlesNavigation } from './';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, View } from "react-native"





const CategoriesList = ({ name, list, navigation, category }) => {
    const [isVisible, setVisibilty] = useState(false);
    const [index, setIndex] = useState(1);
    const [dimen, setDimen] = useState(0)
    const scrollViewRef = useRef()
    var dim = Dimensions.get('window').width;
    const nextItem = () => {

        if (index < 5) {
            var value = (dimen + dim)
            scrollViewRef.current?.scrollTo({ x: value, animated: true })
            setDimen(value)
            var i = index;
            setIndex(i + 1)
        }

    }

    const preveiousItem = () => {
        if (index > 1) {
            var value = (dimen - dim)
            scrollViewRef.current?.scrollTo({ x: value, animated: true })
            setDimen(value)
            var i = index;
            setIndex(i - 1)
        }
    }
    return (
        <Card>
            <View style={styles.titleContainer}>
                <Text style={styles.categoriesTitleStyle}>{name}</Text>
                <TouchableOpacity onPress={() => setVisibilty(!isVisible)}>
                    <Image
                        source={isVisible ? require('../res/ic_plus.png') : require('../res/ic_minimize.png')}
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>
            </View>

            <ColapsingCardSection isVisible={isVisible} >
                <TouchableOpacity onPress={() => navigation.navigate('Category', { category: category })}>
                    <ScrollView
                        scrollEnabled={false}
                        pagingEnabled
                        horizontal
                        ref={scrollViewRef} >
                        {list.map((item, index) => (
                            <ItemHorizontal
                                key={index}
                                article={item} />
                        ))}
                    </ScrollView>

                    <ArticlesNavigation onPressNext={() => nextItem()} onPressPrevious={() => preveiousItem()} />
                </TouchableOpacity>
            </ColapsingCardSection>

        </Card >
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30
    },
    categoriesTitleStyle: {
        width: null,
        paddingStart: 10,
        paddingTop: 2,
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleContainer: {
        flex: 1,
        backgroundColor: '#006bb3',
        flexDirection: 'row'
    }
})
export { CategoriesList };
