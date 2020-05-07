import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';

// define IconComponent, color, sizes and OverflowIcon in one place
const HamburgerHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
);

export const HamburgerHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={HamburgerHeaderButton}
      {...props}
    />
  );
};
export { Item } from 'react-navigation-header-buttons';