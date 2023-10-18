import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

export default function ImageDetail({item}){
    console.log(item)
    return<View>
        <Text style={styles.title} > Image Title </Text>
        <Image source={item}  style={styles.image} />
    </View>
}

const styles =StyleSheet.create({
    image:{
        width:'100vw',
        alignContent:'center'
    },
    title: {
        fontSize: 24,
        margin:5,
        fontWeight: 'bold',
      },
})