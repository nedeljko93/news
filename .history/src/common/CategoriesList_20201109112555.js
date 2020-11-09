import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, FlatList, TouchableOpacity, Image, Animated } from "react-native"


const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibilty] = useState(false);
    const mounted = useRef();
    useEffect(() => {
        if (isVisible) {
            Animated.timing(animationHeight, {
                duration: 1000,
                toValue: 60,
                easing: Easing.linear
            }).start();
        }
        else {
            Animated.timing(animationHeight, {
                duration: 1000,
                toValue: 5,
                easing: Easing.linear
            }).start();
        }
    }, [isVisible])
    return (
        <Card>
            <CardSection >
                <Text>{name}</Text>
                <TouchableOpacity onPress={() => setVisibilty(!isVisible)}>
                    <Image
                        source={isVisible ? require('../res/ic_plus.png') : require('../res/ic_minimize.png')}
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>
            </CardSection>
            <ColapsingCardSection isVisible={isVisible} >
                <FlatList
                    horizontal={true}
                    data={list}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return <ItemHorizontal article={item} />
                    }}
                />
            </ColapsingCardSection>
        </Card>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30
    }
})
export default CategoriesList;
