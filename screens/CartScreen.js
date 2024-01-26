import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import {useNavigation } from '@react-navigation/native'
import { featured } from '../constants'

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = featured.restaurants[0]; 
  return (
    <View className='bg-white flex-1'>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='absolute z-10 rounded-full p-2 bg-primary shadow top-5 left-2'>
            <Icon.ArrowLeft width={20} height={20} strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text className='text-center font-bold text-xl'>Your Cart</Text>
            <Text className='text-center text-gray-700'>{restaurant.name}</Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View className='px-4 my-4 flex-row items-center bg-orange-200 shadow-sm'>
        <Image source={require('../assets/images/bikeGuy.png')} className='w-20 h-20 rounded-full' />
        <Text className='flex-1 font-semibold text-center'>Delivery in 30 - 40 minutes</Text>
        <TouchableOpacity>
            <Text className='font-bold text-primary'>Change</Text>
        </TouchableOpacity>
      </View> 
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
      className='bg-white pt-5'>
            {
                restaurant.dishes.map((dish, index) => {
                    return (
                        <View key={index}
                        className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                            <Text className='text-primary font-bold'>2 X</Text>
                            <Image className='w-14 h-14 rounded-full' source={dish.image} />
                            <Text className='flex-1 text-gray-700 font-semibold'>{dish.name}</Text>
                            <Text className='font-bold'>${dish.price}</Text>
                            <TouchableOpacity className='p-1 rounded-full bg-primary'> 
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>  

        {/* Total */}
        <View className='p-6 px-8 rounded-t-3xl bg-orange-200 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-700'>Subtotal</Text>
                <Text className='text-gray-700'>$20</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-700'>Delivery Fee</Text>
                <Text className='text-gray-700'>$2</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-700 font-extrabold'>Order Total</Text>
                <Text className='text-gray-700 font-extrabold'>$22</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('OrderPrepairing')} className='bg-primary p-2 rounded-lg mt-2'>
                <Text className='text-white text-center font-bold text-lg'>Place Order</Text>
            </TouchableOpacity>
        </View>
        </View>
       
    </View>
  )
}