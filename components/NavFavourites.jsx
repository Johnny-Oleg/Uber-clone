import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, Tokyo, JP',
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Tokyo Tower, Tokyo, JP',
    },
]

const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => (
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites;

const styles = StyleSheet.create({})