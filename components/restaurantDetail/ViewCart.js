import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import OrderItem from './OrderItem';

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
  const total = items.map(item => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  });
  // console.log(totalUSD);
  const addOrderToFire = async () => {
    setLoading(true);
    await addDoc(collection(db, 'orders'), {
      items: items,
      restaurantName: restaurantName,
      createdAt: serverTimestamp()
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('OrderCompleted');
      }, 2500);
    });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>$ {totalUSD}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative'
                }}
                onPress={() => {
                  addOrderToFire();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                <Text style={{ position: 'absolute', right: 20, color: 'white', fontSize: 15, top: 17 }}>{total ? `$ ${totalUSD}` : ''}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 80,
            zIndex: 999
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: 'relative'
              }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
              <Text style={{ position: 'absolute', right: 20, color: 'white', fontSize: 15, top: 17 }}>$ {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <LottieView style={{ height: 200 }} source={require('../../assets/animations/scanner.json')} autoPlay speed={3} />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%'
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: '60%',
    borderWidth: 1
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  }
});

export default ViewCart;
