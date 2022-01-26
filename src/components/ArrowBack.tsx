import React from 'react';
import { StyleSheet,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationAppType } from '../types/stackNavigatorTypes';

const ArrowBack = () => {
    const navigation = useNavigation<UseNavigationAppType>();
    return(
        <TouchableOpacity
            style={styles.buttonArrowBackStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('UserList')}>
            <Image
                source={
                    require('../img/back.png')
                }
                style={styles.buttonImageArrowStyle}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonArrowBackStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageArrowStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
});

export default ArrowBack;
  