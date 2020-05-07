import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration} 
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUri={itemData.item.imageUrl}
        onSelectMeal={() => {
            props.navigation.navigate({routeName: 'MealDetails', params: {
                mealId: itemData.item.id
            }})
        }} />;
    };

    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            keyExtractor={(item, index) => item.id} 
            renderItem={renderMealItem} 
            style={{width: '100%', padding: 10}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;