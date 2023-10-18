import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

export default function About({navigation}){
    return <View>
        <Text> About Screen </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
}