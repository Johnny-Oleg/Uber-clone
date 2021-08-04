import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
// import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order or food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    }

]

const NavOptions = () => {
    const navigation = useNavigation();

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
                    >
                        <View>
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