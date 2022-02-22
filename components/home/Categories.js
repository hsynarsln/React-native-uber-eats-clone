import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    title: 'Pick-up'
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    title: 'Soft Drinks'
  },
  {
    image: require('../../assets/images/bread.png'),
    title: 'Bakery Items'
  },
  {
    image: require('../../assets/images/fast-food.png'),
    title: 'Fast Foods'
  },
  {
    image: require('../../assets/images/deals.png'),
    title: 'Deals'
  },
  {
    image: require('../../assets/images/coffee.png'),
    title: 'Coffee & Tea'
  },
  {
    image: require('../../assets/images/desserts.png'),
    title: 'Desserts'
  }
];

const Categories = () => {
  return (
    <View style={{ marginTop: 5, backgroundColor: '#fff', paddingVertical: 10, paddingLeft: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image source={item.image} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
