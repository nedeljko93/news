import React, { useState } from 'react';
import { Card } from './Card'
import { CardSection } from './CardSection';
import { ColapsingCardSection } from './ColapsingCardSection';
import ItemHorizontal from "../common/ItemHorizontal"
import { Text, StyleSheet, FlatList, TouchableOpacity, Image, View, Dimensions, ScrollView } from "react-native"



const CategoriesList = ({ name, list }) => {
    const [isVisible, setVisibilty] = useState(false);

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
                <View style={{ marginTop: 50, width: Dimensions.get('window').width }}>
                    <ScrollView pagingEnabled horizontal style={{ width: Dimensions.get('window').width }}>
                        {list.map((item, index) => (
                            <ItemHorizontal article={item} />
                        ))}
                    </ScrollView>
                </View>
                <FlatList
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
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
