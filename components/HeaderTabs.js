import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton text='Delivery' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text='Pickup' btnColor='white' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const HeaderButton = props => (
  <TouchableOpacity style={{ backgroundColor: props.activeTab === props.text ? 'black' : 'white', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }} onPress={() => props.setActiveTab(props.text)}>
    <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: 'bold' }}>{props.text}</Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({});
