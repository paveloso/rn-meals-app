import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import GridTile from '../components/GridTile'
import Colors from '../constants/Colors';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {

        return <GridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals', 
                params: {
                    catId: itemData.item.id
                }
            });
        }}/>;
    };

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;