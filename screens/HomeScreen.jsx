import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
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
                    placeholder="Where from...?"
                    styles={{
                        container: {
                            flex: 0, //? flex 1 or 2
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
                        language: 'ja',
                    }}
                    // requestUrl={{
                    //     useOnPlatform: 'web', // or "all"
                    //     url:
                    //     'https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                    // }}
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

const styles = StyleSheet.create({}) //?