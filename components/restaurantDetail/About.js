import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://www.themarmarahotels.com/Resources/RestaurantImage/ImageFile/bodrumtutigaleri01_l.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [{ title: 'Thai' }, { title: 'Asian' }, { title: 'Vegetarian' }]
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map(category => category.title).join(' · ');

const description = `${formattedCategories} ${price ? ' · ' + price : ''} · cart · ${rating} star (${reviews}+)`;

const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = props => <Image source={{ uri: props.image }} style={{ width: '100%', height: 150 }} />;

const RestaurantTitle = props => <Text style={{ fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>;

const RestaurantDescription = props => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5
    }}
  >
    {props.description}
  </Text>
);

export default About;

const styles = StyleSheet.create({});
