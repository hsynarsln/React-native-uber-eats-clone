import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements/dist';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: 'Lasagna',
    description: 'With a rich tomato sauce and lots of cheese',
    price: '$13.50',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2MKbmLEH37mQPT3BiYcrEplwRvRGpmpsQdnx8LF7TJ5wGS5CIFEm0ceOKm-Z3X9lqMo&usqp=CAU'
  },
  {
    title: 'Tandoori Chicken',
    description: 'Amazing chicken dish',
    price: '$19.20',
    image: 'https://img-global.cpcdn.com/recipes/b114fd2f1b65e6a1/1200x630cq70/photo.jpg'
  },
  {
    title: 'Kebab',
    description: 'Görüntüsü bile sizi şımartmaya yetecek, bol malzemeli ve aynı zamanda boş çeşitli bir karışık ızgara.',
    price: '$25.30',
    image: 'https://www.nizampide.com/wp-content/uploads/2018/07/nizam-special-kar%C4%B1%C5%9F%C4%B1k-kebap-%C4%B1zgara-porsiyon-nizam-pide-s%C3%BCtla%C3%A7-istanbul-beyo%C4%9Flu-istiklal-caddesi-600x600.jpg'
  },
  {
    title: 'Pizza',
    description: 'Evde tek kişilik pizza yapılamaz mı? Şüphesiz yapılır, pizza hep kalabalık yenmek zorunda olan bir',
    price: '$17.25',
    image: 'https://ykv.s3.eu-central-1.amazonaws.com/img/tarif/mgt/ykvmayiswebsite26.jpg'
  }
];

const RestaurantDetail = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
