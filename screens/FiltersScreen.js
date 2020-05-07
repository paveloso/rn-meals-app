import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { HamburgerHeaderButtons, Item as I1 } from '../components/SettingsHeaderButton';
import { CheckBoxHeaderButtons, Item as I2 } from '../components/SaveHeaderButton';

import { setFilters } from '../store/actions/meals';
// export { Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.secondaryColor}
                value={props.state} onValueChange={props.onChange}/>
        </View>
    );
};

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegeterian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
            <FilterSwitch label='Vegeterian' state={isVegeterian} onChange={newValue => setIsVegeterian(newValue)}/>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Apply Filters',
        headerLeft: () => 
                <HamburgerHeaderButtons>
                    <I1 title="add" iconName="menu" onPress={() => {navData.navigation.toggleDrawer();}} />
                </HamburgerHeaderButtons>,
        headerRight: () => 
            <CheckBoxHeaderButtons>
                <I2 title="save" iconName="save" onPress={() => {
                        navData.navigation.getParam('save')();
                    }} />
            </CheckBoxHeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;