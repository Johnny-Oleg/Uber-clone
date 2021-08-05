import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

import { selectOrigin } from '../slices/navSlice';
import carImg from '../images/car-img.webp';
import foodImg from '../images/food-img.png';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: carImg,
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order or food',
        image: foodImg,
        screen: 'EatsScreen',
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <View>
            <FlatList
                data={data}
                ketExtractor={({ item }) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 pt-4 pb-8 pl-6 bg-gray-200 m-2 w-40`}
                        disabled={!origin}
                    >
                        <View style={tw`${!origin && 'opacity-20'}`}>
                            <Image
                                style={{width: 120, height: 120, resizeMode: 'contain'}}
                                source={{uri: item.image}}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon 
                                style={tw`p-2 bg-black rounded-full mt-4 w-10`}
                                name="arrowright" 
                                color="white" 
                                type="antdesign" 
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions;