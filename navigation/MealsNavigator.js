import React from 'react';
import { Platform, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const defaultStackNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
    Categories: {                // alternate initialization
        screen: CategoriesScreen
    },
    CategoryMeals: {                // alternate initialization
        screen: CategoryMealsScreen
    },
    MealDetails: {                // alternate initialization
        screen: MealDetailsScreen,
    },
},
{
    defaultNavigationOptions: defaultStackNavOption
}
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
}, {
    defaultNavigationOptions: defaultStackNavOption
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor}/>);
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: 'Favs',
            tabBarIcon: (tabInfo) => {
                return (<MaterialIcons name="control-point" size={25} color={tabInfo.tintColor}/>);
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favs</Text> : 'Favs'
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    //
    // if shifting false this sets the tabBar color
    //
    // barStyle: {
    //     backgroundColor: Colors.primaryColor
    // }
}) 
: createBottomTabNavigator(
    tabScreenConfig, 
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.secondaryColor
        }
    }
);

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOption
});

const MainNavigator = createDrawerNavigator({
    MealsFave: { 
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: { 
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filters'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);