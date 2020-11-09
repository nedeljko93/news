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
        var dim = (Dimensions.get('window').width)
        console.log("DIMENSION PLUS " + dimen)
        if (index < 5) {
            var value = (dimen + dim)
            scrollViewRef.current?.scrollTo({ x: value, animated: true })
            setDimen(value)
            var i = index;
            setIndex(i + 1)
        }

    }

    const preveiousItem = () => {
        var dim = (Dimensions.get('window').width)
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
        paddingStart:10,
        paddingTop:2,
        fontSize: 18,
        fontWeight: 'bold',

    }
})
export default CategoriesList;
