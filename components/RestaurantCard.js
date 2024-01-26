import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', { ...item })}>
      <View className="mr-6 shadow-lg shadow-gray-200 p-1 bg-white rounded-3xl">
        <Image className="w-64 h-36 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
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
        </View>
        <View className="flex-row pl-2 items-center space-x-1">
          <Icon.MapPin width={25} height={15} color="gray" stroke="gray" />
          <Text className="text-xs text-gray-700">Nearby. {item.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
