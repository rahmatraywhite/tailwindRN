import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
    const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className='bg-primary flex-row justify-between items-center mx-5 p-4 py-3 rounded-full shadow-lg'>
            <View className='p-2 px-4 rounded-full' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <Text className='text-white text-lg font-bold'>3</Text>
            </View>
            <Text className='flex-1 items-center text-center font-extrabold text-white text-lg'>
                View Cart
            </Text>
            <Text className='text-lg font-extrabold text-white'>
                ${23}
            </Text>
        </TouchableOpacity>
    </View>
  )
}