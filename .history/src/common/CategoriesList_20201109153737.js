import React, { useState, useRef } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from '../common/ItemHorizontal'
import ArticlesNavigation from '../common/ArticlesNavigation'
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native"



const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibilty] = useState(false);
    const [index, setIndex] = useState(1);
    const [dimen, setDimen] = useState(0)
    const scrollViewRef = useRef()

    const nextItem = () => {
        var dim = (Dimensions.get('window').width * 90 / 100) + 19
        console.log("DIMENSION PLUS " + dimen)
        if (index < 6) {
            var value = (dimen + dim)
            scrollViewRef.current?.scrollTo({ x: value, animated: true })
            setDimen(value)
            var i = index;
            setIndex(i + 1)
            console.log(dimen)
        }

    }

    const preveiousItem = () => {
        console.log("DIMENSION MINUS " + dimen)
        var dim = (Dimensions.get('window').width * 90 / 100) + 19
        if (index < 0) {
            var value = (dimen - dim)
            scrollViewRef.current?.scrollTo({ x: Dimensions.get('window').width * 90 / 100, animated: true })
            setDimen(value)
            var i = index;
            setIndex(i - 1)
        }
    }
    return (
        <Card>
            <CardSection >
                <Text style={styles.categoriesTitleStyle}>{name}</Text>
                <TouchableOpacity onPress={() => setVisibilty(!isVisible)}>
                    <Image
                        source={isVisible ? require('../res/ic_plus.png') : require('../res/ic_minimize.png')}
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>
            </CardSection>

            <ColapsingCardSection isVisible={isVisible} >
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
        fontSize: 18,
        fontWeight: 'bold',

    }
})
export default CategoriesList;
