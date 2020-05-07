import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HamburgerHeaderButtons, Item } from '../components/SettingsHeaderButton';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: "My Favorites",
        headerLeft: () => 
            <HamburgerHeaderButtons>
                <Item title="add" iconName="menu" onPress={() => {navData.navigation.toggleDrawer();}} />
            </HamburgerHeaderButtons>
    };
};

export default FavoritesScreen;