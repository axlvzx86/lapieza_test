import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getUsersSelector } from '../redux/selectors';
import { DParams } from '../types/params';


const UserDetailScreen = () => {
    const route = useRoute();
    const users = useSelector(getUsersSelector);
    const [userId, setUserId] = useState<DParams>({
        id: 0
    });
    const [selectedIndex, setSelectedIndex] = useState(-1);


    useEffect(() => {
        const { id } = route.params as DParams;
        setUserId({ id: id });
    }, [route.params]);

    useEffect(() => {
        searchUser();
    },[userId.id] );

    const searchUser = () => {
        const index = users.findIndex((item) => item.id == userId.id);
        setSelectedIndex(index);
    };

    return (
        <View style={styles.card}>
            {selectedIndex !== -1 ? (
                <View>
                    <Text>Name: {users[selectedIndex].name}</Text>
                    <Text>User: {users[selectedIndex].username}</Text>
                    <Text>Email: {users[selectedIndex].email}</Text>
                    <Text>Phone: {users[selectedIndex].phone}</Text>
                    <Text>Website: {users[selectedIndex].website}</Text>
                </View>

            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10
    }
});

export default UserDetailScreen;