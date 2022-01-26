import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import UserListScreen from '../screens/UserListScreen';
import { APP_CONSTANTS } from '../utils';
import ArrowBack from '../components/ArrowBack';

const AppDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={APP_CONSTANTS.HOME_NAVIGATION}  >
                <Drawer.Screen
                    name={APP_CONSTANTS.HOME_NAVIGATION}
                    component={HomeScreen}
                    options={{ title: APP_CONSTANTS.HOME_NAVIGATION_LABEL }}
                />
                <Drawer.Screen
                    name={APP_CONSTANTS.LIST_NAVIGATION}
                    component={UserListScreen}
                    options={{ title: APP_CONSTANTS.LIST_NAVIGATION_LABEL }} />
                <Drawer.Screen
                    name={APP_CONSTANTS.DETAIL_NAVIGATION}
                    component={UserDetailScreen}
                    options={{
                        title: APP_CONSTANTS.DETAIL_NAVIGATION_LABEL, drawerItemStyle: styles.details, headerLeft: () => (
                            <ArrowBack />
                        ),
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );

};

const styles = StyleSheet.create({
    details: {
        display: 'none',
    }
});

export default AppDrawer;
