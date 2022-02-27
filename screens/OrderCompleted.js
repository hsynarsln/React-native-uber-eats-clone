import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MenuItem from '../components/restaurantDetail/MenuItem';
import { db } from '../firebase';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Kebab',
        description: 'Görüntüsü bile sizi şımartmaya yetecek, bol malzemeli ve aynı zamanda boş çeşitli bir karışık ızgara.',
        price: '$25.30',
        image: 'https://www.nizampide.com/wp-content/uploads/2018/07/nizam-special-kar%C4%B1%C5%9F%C4%B1k-kebap-%C4%B1zgara-porsiyon-nizam-pide-s%C3%BCtla%C3%A7-istanbul-beyo%C4%9Flu-istiklal-caddesi-600x600.jpg'
      }
    ]
  });
  const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
  const total = items.map(item => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  });

  useEffect(() => {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(1));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      querySnapshot.docs.map(doc => setLastOrder(doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ margin: 15, alignItems: 'center', height: '100%' }}>
        <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 30 }} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.5} loop={false} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Your order at {restaurantName} has been placed for $ {totalUSD}{' '}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 30 }} source={require('../assets/animations/cooking.json')} autoPlay speed={0.5} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
