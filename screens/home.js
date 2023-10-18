import React, {useEffect, useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image,Button} from 'react-native';

export default function Home({navigation}){
    return <View >
        <Image source={{uri:'http://192.168.6.46:3000/image/bbccafaf7659642d15466e4689d6287a'}}  style={styles.image} />
        <Text style={styles.title}>Welcome to the ImageMania</Text>
        <Text style={styles.subtitle}> Your one-stop destination for amazing content </Text>
        {/* <Button title="About" onPress={() => navigation.navigate('About')} /> */}
        <TouchableOpacity onPress={()=> navigation.navigate('Images')} >
            <Text style={styles.button} >
                Get Started
            </Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: '100vw',
      height: 200,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      margin:5,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      margin:5,
      color: '#888',
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#007BFF',
      fontSize:20,
      margin:5,
      fontWeight:"bold",
      fontStyle:"italic",
      padding: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  