import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps'
import * as Icon from 'react-native-feather'

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
        <MapView
            initialRegion={{latitude: restaurant.lat, longitude: restaurant.lng, latitudeDelta: 0.001, longitudeDelta: 0.001}}
            className='flex-1' mapType='standard'>
                <Marker coordinate={{latitude: restaurant.lat, longitude: restaurant.lng}}
                title={restaurant.name} description={restaurant.description} pinColor='#F97316'>

                </Marker>
        </MapView>
        <View className='rounded-t-3xl bg-white shadow-3xl -mt-12 relative'>
            <View className='flex-row justify-between px-5 pt-10'>
                <View>
                    <Text className='text-lg text-gray-700 font-bold'>Estimated Arrival</Text>
                    <Text className='text-3xl text-gray-700 font-extrabold'>20 - 25 min</Text>
                    <Text className='text-lg text-gray-700 font-bold my-2'>Your Order is own its way!</Text>
                </View>
                <Image className='h-24 w-24' source={require('../assets/images/bikeGuy2.gif')}/>
            </View>
            <View className='p-2 flex-row justify-between bg-orange-400 items-center rounded-full my-5 mx-2'>
                <View className='p-1 rounded-full '>
                    <Image className='h-16 w-16 rounded-full' source={require('../assets/images/deliveryGuy.png')}/>
                </View>
                <View className='flex-1 ml-3'>
                    <Text className='text-lg text-white font-bold'>Si Mamat</Text>
                    <Text className='text-lg text-white font-medium'>Your Rider</Text>
                </View>
                <View className='flex-row items-center space-x-3 mr-3'>
                    <TouchableOpacity className='bg-white p-2 rounded-full'>
                        <Icon.Phone width={20} height={20} strokeWidth={3} fill={'#F97316'} stroke="#F97316" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} className='bg-white p-2 rounded-full'>
                       <Icon.X width={20} height={20} strokeWidth={4} fill={'#F97316'} stroke="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}