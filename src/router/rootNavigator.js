import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NOTIFICATIONS, PRODUCTDETAIL, PRODUCTS, TABMENU} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Notifications from '../screens/notifications';
import appColors from '../theme/colors';
import Products from '../screens/products';
import productDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: appColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABMENU}
        component={TabNavigator}
      />

      <Stack.Screen
        options={{}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen options={{}} name={PRODUCTS} component={Products} />
      <Stack.Screen
        options={{}}
        name={PRODUCTDETAIL}
        component={productDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
