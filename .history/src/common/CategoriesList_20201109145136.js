import React, { useState, useRef } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from '../common/ItemHorizontal'
import ArticlesNavigation from '../common/ArticlesNavigation'
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native"



const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibilty] = useState(false);
    const [index, setIndex] = 1;
    const scrollViewRef = useRef()

    const nextItem = () => {
        if (index < 5) {
            scrollViewRef.current?.scrollTo({ x: Dimensions.get('window').width * 90 / 100 * index, animated: true })
            val = index++;
            setIndex(val)
        }
    }
    const preveiousItem = () => {
        console.log("change item Previous")
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
