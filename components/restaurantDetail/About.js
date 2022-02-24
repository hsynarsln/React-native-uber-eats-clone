import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map(category => category.title).join(' · ');

  const description = `${formattedCategories} ${price ? ' · ' + price : ''} · cart · ${rating} star (${reviews}+)`;

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
