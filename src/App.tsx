import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppDrawer from './drawer';
import { NativeModules, Platform } from 'react-native';


const App = () => {

    useEffect(() => {
        if (Platform.OS === 'android') {
            NativeModules.SplashScreenModule.hide();
        }
    }, []);

    return (
        <Provider store={store}>
            <AppDrawer />
        </Provider>

    );
};

export default App;
