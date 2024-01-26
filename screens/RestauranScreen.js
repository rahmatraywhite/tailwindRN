import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';

export default function RestauranScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
    <View>
      <CartIcon />
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-9 left-5 p-3 bg-gray-100 rounded-full shadow-md">
            <Icon.ArrowLeft
              width={20}
              height={20}
              strokeWidth={3}
              color="#F97316"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white pt-6 -mt-12">
          <View className="px-4">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="w-4 h-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.star}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} reviews) .{item.type}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin
                  width={25}
                  height={15}
                  color="gray"
                  stroke="gray"
                />
                <Text className="text-xs text-gray-700">
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="text-2xl font-bold p-4">Menu</Text>
          {item.dishes.map((dish, index) => <DishRow key={index} item={dish} />)}
        </View>
      </ScrollView>
    </View>
  );
}
