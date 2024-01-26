import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center justify-between p-3 bg-gray-200 rounded-3xl shadow-3xl mb-3 mx-2">
      <Image source={item.image} className="w-[100px] h-[100px] rounded-3xl" />
      <View className='flex flex-1 space-y-2'>
        <View className="pl-3">
            <Text className='text-xl'>{item.name}</Text>
            <Text className='text-lg text-gray-700'>{item.description}</Text>
        </View>
        <View className="flex-row items-center justify-between pl-3">
            <Text className='text-lg font-bold text-gray-700'>
                ${item.price}
            </Text>
            <View className="flex-row items-center">
                <TouchableOpacity className="p-1 bg-primary rounded-full">
                    <Icon.Minus width={20} height={20} strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <Text className="px-3">{2}</Text>
                <TouchableOpacity className="p-1 bg-primary rounded-full">
                    <Icon.Plus width={20} height={20} strokeWidth={3} stroke="white" />
                </TouchableOpacity>
            </View>
        </View>
      </View>   
    </View>
  );
}
