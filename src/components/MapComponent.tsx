import React, {useState, useEffect}  from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { APP_CONSTANTS } from '../utils';




const MapComponent = () => {

 
    const [
        currentLongitude,
        setCurrentLongitude
    ] = useState(0);
    const [
        currentLatitude,
        setCurrentLatitude
    ] = useState(0);


    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: APP_CONSTANTS.PERMISSION_REQUEST_TITLE,
                            message: APP_CONSTANTS.PERMISSION_REQUEST_MESSAGE,
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                        subscribeLocationLocation();
                    } else {
                        Alert.alert(APP_CONSTANTS.DENAIED_PEMISSION_MESSSAGE);
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setCurrentLongitude(position.coords.longitude);
                setCurrentLatitude(position.coords.latitude);
            },
            (error) => {
                console.log(error);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                setCurrentLongitude(position.coords.longitude);
                setCurrentLatitude(position.coords.latitude);
            },
            (error) => {
                console.log(error);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };


  

    return (
    
        <View style ={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
        
            >
                <Marker
                    coordinate={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                    }}>
                </Marker>
            </MapView>

        </View>


   
     
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
     
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapComponent;
