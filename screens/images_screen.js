import React,{useState,useEffect} from 'react';
import {View,Dimensions,StyleSheet,Text,Image,FlatList, SafeAreaView, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';

//TODO: Add auth, add ,update, delete

const screenWidth = Dimensions.get("window").width;
const tileSize = screenWidth / 3;
function renderItem({item,handlePress}){
    //console.log("http://192.168.6.46:3000\\image\\"+ item.filename)
    return 
}

export default function Images({navigation}){
     const [imageData, setImageData] = useState("");
     const [modalImage,setModalImage] = useState("");
     const [visible,setVisible] = useState(false);
     
  useEffect(() => {
    fetch("http://192.168.6.46:3000/images")
      .then((res) => res.json())
      .then((json) => setImageData(json))
      .catch(err=>console.error(err));
  }, []);
//   console.log(imageData[0])
    return <SafeAreaView style={styles.container}  >
        <View style={styles.inputContainer} >
        
        <Modal visible={visible} animationType='slide' onRequestClose={this.closeModal} >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
            <Text style={styles.title} > Image Title </Text>
                <Image
                source={{uri: modalImage}}
                style={styles.bigImage}
                />
                <MaterialIcons 
                name='close'
                size={24}
                onPress={()=>setVisible(false)}
            />
            </View>
                </Modal>
        <Text style={styles.title} > Explore </Text>
            <FlatList data={imageData} renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>{
                    setVisible(true)
                    setModalImage("http://192.168.6.46:3000\\image\\"+ item.filename)
                    }}>
                <Image
                source={{uri: "http://192.168.6.46:3000\\image\\"+ item.filename}}
                style={styles.card}
            />
            </TouchableOpacity>
            }} numColumns={3} key={imageData.length} />
        </View>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      marginBottom:30
    },
    inputContainer:{
        width:screenWidth,
        marginBottom:10   
    },
    pin_container: {
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'red'
    },
    bigImage:{
        width:400,
        height:400,
    
    },
    card: {
        width:tileSize,
        height:tileSize,
        margin:1,
        padding: 0,
        borderRadius: 16,
        //backgroundColor: 'red'
    },
    image: {
      width: 100,
      height: 100,
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
  