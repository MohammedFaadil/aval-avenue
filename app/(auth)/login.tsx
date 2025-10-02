import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../../global.css";



const login = () => {
      const router = useRouter();
  
  return (
    <View style={styles.mainContainer}>
    <Image source={require("../../assets/bubbles/login/bb1.png")} style={[styles.blob, styles.topLeft1]} />
    <Image source={require("../../assets/bubbles/login/bb2.png")} style={[styles.blob, styles.topLeft2]} />
    <Image source={require("../../assets/bubbles/login/bb3.png")} style={[styles.blob, styles.right]} />
    <Image source={require("../../assets/bubbles/login/b4.png")} style={[styles.blob, styles.rightBottom]} />

    <View style={styles.container}>    
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Good to see you back! 🖤</Text>
      <View style={styles.loginFeilds}>
      <TextInput placeholder='Email' style={styles.inputBox} placeholderTextColor={"#D2D2D2"} />
      <TouchableOpacity style={styles.nextBtn} onPress={()=>{
        router.replace("/(auth)/passwordScreen");
      }} >
        <Text style={styles.nextTxt}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>{router.replace("/(auth)")}}>
        <Text style={styles.cancelTxt}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>

    
    
    </View>
  )
}

export default login

const styles = StyleSheet.create({
    blob:{
    position: "absolute",
    resizeMode: "contain",
    opacity: 0.9,
    zIndex:2
    },
    mainContainer:{
       backgroundColor:"#fff",
       flex:1
    },
    topLeft1:{
        left:-158,
        top:-171,
        width:402,
        height:442

    },
    topLeft2:{
        width:373,
        height:442,
        top:-110,
        left:-60,
      
    },
    right:{
      width:137,
      height:151,
      top:239,
      left:320
    },
    rightBottom:{
      width:373,
      height:442,
      left:87,
      top:490
    },
    container:{
      zIndex:3,
      // alignItems:"center",
      // justifyContent:"center",
      // borderWidth:1,
      marginHorizontal:20,
      marginTop:450,
     
    },
    title:{
      fontSize:52,
      fontFamily:"Raleway-Medium",
      fontWeight:"700"
    },
    subTitle:{
      fontSize:19,
      fontFamily:"NunitoSans",
      fontWeight:"300"
    },
    inputBox:{
    width:"100%",
    height:52.5,
    backgroundColor:"#F8F8F8",
    borderRadius:60,
    padding:5,
    paddingLeft:20

  },
  loginFeilds:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:40
  },
  nextBtn:{
    backgroundColor:"#FF5790",
    width:335,
    height:61,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
    marginTop:45
  },
  nextTxt:{
     fontFamily:"NunitoSans",
    fontSize:22,
    textAlign:"center",
    color:"white",
    fontWeight:"300"
  },
  cancelTxt:{
     color:"#202020",
    fontFamily:"NunitoSans",
    fontWeight:"300",
    fontSize:15
  }
  
})