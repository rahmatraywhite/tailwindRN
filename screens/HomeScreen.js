import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import React from 'react';
import Categori from '../components/categori';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={'dark-content'} />
      <View className="flex-row items-center md:space-x-2 px-4 py-2 justify-center">
        <View className="flex-row flex-1 items-center mr-2 p-3 rounded-full border border-gray-300">
          <Icon.Search width={20} height={20} color="gray" stroke="gray" />
          <TextInput placeholder="Restaurants" className="flex-1 ml-2" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin width={20} height={20} color="gray" stroke="gray" />
            <Text className="text-xs text-gray-500">Sepatan</Text>
          </View>
        </View>
        <View className="p-3 bg-primary rounded-full">
          <Icon.Sliders
            width={20}
            height={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* isinya mungkin */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <Categori />
      </ScrollView>

      {/* Fitrue */}
      <View className="mt-5">
        {
          [featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}/>
            )
          }
            
          )
        }
      </View>
    </SafeAreaView>
  );
}

