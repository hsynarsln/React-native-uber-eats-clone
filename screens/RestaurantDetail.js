import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements/dist';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';

const RestaurantDetail = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
