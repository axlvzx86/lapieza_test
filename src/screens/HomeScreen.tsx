import React from 'react';
import { View } from 'react-native';
import DateAndTime from '../components/DateAndTime';
import MapComponent from '../components/MapComponent';


const HomeScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .3 }} >
                <DateAndTime />
            </View>
            <View style={{ flex: 3 }} >
                <MapComponent />
            </View>

        </View>
    );
};

export default HomeScreen;