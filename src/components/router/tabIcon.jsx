import React from 'react';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  PROFİLE,
  TRENDYOLGO,
} from '../../utils/routes';
import {
  Heart,
  Home,
  ProfileCircle,
  Shop,
  ShoppingCart,
} from 'iconsax-react-native';

const tabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case TRENDYOLGO:
      return (
        <Shop
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORİTES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFİLE:
      return (
        <ProfileCircle
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
      break;
  }
};

export default tabIcon;
