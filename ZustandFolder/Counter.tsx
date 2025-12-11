import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import countStore from './useStore';
import { SafeAreaView } from 'react-native-safe-area-context';

const Counter = () => {
    const count = countStore((state) => state.count);
    const increase = countStore((state) => state.increase);
    const decrease = countStore((state) => state.decrease);
    const reset = countStore((state) => state.reset);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.countText}>Count: {count}</Text>
            <Button title="Increase" onPress={increase} />
            <Button title="Decrease" onPress={decrease} />
            <Button title="Reset" onPress={reset} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    countText: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Counter;