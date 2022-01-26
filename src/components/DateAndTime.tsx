import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';



const DateAndTime = () => {
    const [dateState, useDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => useDateState(new Date()), 1000);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Bienvenido(a)
                    </Text>
                    <Text style={styles.textStyle}>
                        {dateState.toLocaleString('es-MX', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
    },
});

export default DateAndTime;



