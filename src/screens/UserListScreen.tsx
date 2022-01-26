import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationAppType } from '../types/stackNavigatorTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingSelector, getUsersSelector, getErrorSelector } from '../redux/selectors';
import { userRequest } from '../redux/actions/actions';
import {  IItem, IList } from '../interfaces';


const Item: React.FC<IItem> = ({ title, userName, onPress }): JSX.Element => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt}>{userName}</Text>
        </View>
    </TouchableOpacity>

);

const UserListScreen = () => {
    const navigation = useNavigation<UseNavigationAppType>();
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const users = useSelector(getUsersSelector);
    const error = useSelector(getErrorSelector);

    const renderItem: React.FC<IList> = ({ item }): JSX.Element => (
        <View><Item title={item.name} userName={item.username} onPress={() => {
            navigation.navigate('UserDetail', {
                id: item.id
            });
        }} /></View>
    );

    useEffect(() => {
        dispatch(userRequest());
    }, []);


    return (
        <View style={styles.container}>
            {pending ? (
                <ActivityIndicator size='large' color='#909FA1' />
            ) : error ? (
                <Text>Error</Text>
            ) : (
                <SafeAreaView >
                    <FlatList
                        data={users}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#909FA1',
        color: '#ff00ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    txt: {
        color: '#ffffff',
        fontSize: 16,
    }
});


export default UserListScreen;
