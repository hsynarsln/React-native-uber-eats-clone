import { YELP_API_KEY } from '@env';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements/dist';
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

const API_KEY = YELP_API_KEY;

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Ankara');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    fetch(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        setRestaurantData(responseJson.businesses.filter(business => business.transactions.includes(activeTab.toLowerCase())));
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
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
