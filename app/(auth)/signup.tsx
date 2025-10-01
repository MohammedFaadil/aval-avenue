import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../../global.css";



const signUp = () => {
    const router = useRouter();
  return (
    <>
    <Image source={require("../../assets/bubbles/signup/b1.png")} style={[styles.blob, styles.right]} />
    <Image source={require("../../assets/bubbles/signup/b2.png")} style={[styles.blob, styles.left]} />
    
    <View style={styles.container}>
        
        <Text style={styles.title}>Create{'\n'}Account</Text>
        <Image source={require("../../assets/bubbles/signup/uploadImage.png")} style={styles.uploadImage} />

     <View style={styles.infoContainer}>
        <TextInput style={styles.inputBox} placeholder='Email' placeholderTextColor={"#D2D2D2"}/>
        <TextInput style={styles.inputBox} placeholder='Password' placeholderTextColor={"#D2D2D2"} secureTextEntry={true} />
        <TextInput style={styles.inputBox} placeholder='Your number' placeholderTextColor={"#D2D2D2"} />
    </View>


    <View style={styles.footer}>
        <TouchableOpacity style={styles.doneBtn} onPress={()=>{
            router.replace("/(auth)/login")
          }}>
            <Text style={styles.doneTxt}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop:20}}>
            <Text style={styles.cancelTxt}>Cancel</Text>
          </TouchableOpacity>
    </View>

    


    </View>

   



    </>
    
  )
}

export default signUp

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    },
     blob: {
    position: "absolute",
    resizeMode: "contain",
    opacity: 0.9,
    zIndex:2
  },
  left:{
    top:0,
    left:0,
    height:311,
    width:361
  },
  right:{
    bottom:415,
    left:316,
    height:266,
    width:243
  },
  title:{
    fontSize:50,
    fontFamily:"Raleway-Medium",
    fontWeight:700,
    marginTop:122,
    marginLeft:30,
    zIndex:3
  },
  uploadImage:{
    height:90,
    width:90,
    marginLeft:30,
    marginTop:144
  },
  infoContainer:{
    justifyContent:"center",
    gap:10,
    alignItems:"center",
    marginTop:20
  },
  inputBox:{

    width:"80%",
    height:52.5,
    backgroundColor:"#F8F8F8",
    borderRadius:60,
    padding:5,
    paddingLeft:20

  },
  doneBtn:{
    backgroundColor:"#FF5790",
    width:335,
    height:61,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
  },
  doneTxt:{
     fontFamily:"NunitoSans",
    fontSize:22,
    textAlign:"center",
    color:"white",
    fontWeight:300
  },
  footer:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:30
  },
  cancelTxt:{
    color:"#202020",
    fontFamily:"NunitoSans",
    fontWeight:300,
    fontSize:15
  }
})