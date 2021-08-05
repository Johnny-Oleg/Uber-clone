import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';

import { GOOGLE_MAPS_API_KEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import uberLogo from '../images/Uber_logo.svg.png';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{uri: uberLogo}}
                />   
                <GooglePlacesAutocomplete 
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 1, //? flex 0
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})