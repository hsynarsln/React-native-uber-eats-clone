import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements/dist';

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
  }
];

const MenuItem = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={1} orientation='vertical' />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = props => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View>
    <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
  </View>
);

export default MenuItem;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '600'
  }
});
