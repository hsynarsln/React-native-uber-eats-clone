import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
          },
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
          }
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name='location-sharp' size={24} color='black' />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center'
            }}
          >
            <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
            <Text>Search</Text>
          </View>
        )}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en'
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
