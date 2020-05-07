import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {

    

    const catId = props.navigation.getParam('catId');

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('catId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealsScreen;