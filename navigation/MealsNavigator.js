import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import Colors from '../constants/Colors'

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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}
);

export default createAppContainer(MealsNavigator);