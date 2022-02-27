import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Home from './screens/Home';
import OrderCompleted from './screens/OrderCompleted';
import RestaurantDetail from './screens/RestaurantDetail';

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
          <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
