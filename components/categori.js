import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'

export default function Categori() {
    const [active, setActive] = React.useState(null)
  return (
    <View className="mt-4">
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{ paddingHorizontal: 15 }}>
            {
                categories.map((categori, index) => {
                    let activeStyle = active === categori.id ? 'bg-gray-700 ease-in-out' : 'bg-gray-200 ease-in'
                    let textActive = active === categori.id ? 'text-white font-semibold ease-in-out' : 'text-gray-700 ease-in'
                    
                    return (
                        <View key={index} className="mr-6 flex justify-center">
                            <TouchableOpacity onPress={() => setActive(categori.id)} className={`p-2 rounded-full transition 0.3s  ${activeStyle} p-1 rounded-full flex w-[60px] h-[60px] justify-center items-center`}>
                                <Image source={categori.image} className="w-[25px] h-[25px]" />
                                <Text className={`text-[10px] bg-transparent ${textActive}`}>{categori.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}