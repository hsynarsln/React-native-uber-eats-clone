import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beacside Bar',
    image_url: 'https://www.themarmarahotels.com/Resources/RestaurantImage/ImageFile/bodrumtutigaleri01_l.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5
  },
  {
    name: 'Benihana',
    image_url: 'https://www.themarmarahotels.com/Resources/RestaurantImage/ImageFile/bodrumtutigaleri02_l.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7
  },
  {
    name: 'Aspava',
    image_url: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/80/18/80187_v9.jpeg',
    categories: ['Turkish', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9
  }
];

const RestaurantItem = props => {
  return (
    <>
      {props.restaurantData?.map((restaurant, index) => (
        <TouchableOpacity key={index} activeOpacity={0.5} style={{ marginBottom: 30 }}>
          <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = props => (
  <>
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 150 }} />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name='heart-outline' size={30} color='white' />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 15, color: 'gray' }}>30-45 · min</Text>
    </View>
    <View style={{ backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

export default RestaurantItem;

const styles = StyleSheet.create({});
