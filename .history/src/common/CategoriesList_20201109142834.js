import React, { useState } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from '../common/ItemHorizontal'
import ArticlesNavigation from '../common/ArticlesNavigation'
import { Text, StyleSheet, TouchableOpacity, Image, View, ScrollView } from "react-native"



const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibilty] = useState(false);
    const nextItem = () => {
        console.log("change item next")
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
                    horizontal >
                    {list.map((item, index) => (
                        <ItemHorizontal
                            key={index}
                            article={item} />
                    ))}
                </ScrollView>
                <ArticlesNavigation />
                {/* <View style={styles.itemNavigation} >
                    <TouchableOpacity onPress={() => preveiousItem()}>
                        <Image
                            style={styles.navImages}
                            source={require('../res/ic_minimize.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nextItem()}>
                        <Image
                            style={styles.navImages}
                            source={require('../res/ic_plus.png')} />
                    </TouchableOpacity>
                </View> */}

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

    }, itemNavigation: {
        justifyContent: 'center',
        flexDirection: 'row'

    },
    navImages: {
        width: 20,
        height: 20,
        margin: 5
    }
})
export default CategoriesList;
