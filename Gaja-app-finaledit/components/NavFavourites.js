import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
const data = [
    {
        id: "123",
        icon: "home",
        location: "집",
        destination: "매탄동, 수원, 한국",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "직장",
        destination: "휴먼교육센터, 수원, 한국",
    },
];

const NavFavourites = () => {
    return (
        <FlatList 
        data={data} keyExtractor={item => item.id} 
        ItemSeparatorComponent={() => (
            <View style={tw`bg-gray-200`, {height: 0.5}} />
        )} 
        renderItem={({item :{location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )} />
    )
}

export default NavFavourites

