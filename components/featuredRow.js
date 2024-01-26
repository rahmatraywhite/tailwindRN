import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';

export default function featuredRow({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold text-primary">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}
