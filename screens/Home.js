import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = 'YOUR API KEY';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    fetch(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=San+Francisco`, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        setRestaurantData(responseJson.businesses);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    // getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
