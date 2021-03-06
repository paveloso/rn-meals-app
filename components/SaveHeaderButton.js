import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';

// define IconComponent, color, sizes and OverflowIcon in one place
const CheckBoxHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
);

export const CheckBoxHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={CheckBoxHeaderButton}
      {...props}
    />
  );
};
export { Item } from 'react-navigation-header-buttons';