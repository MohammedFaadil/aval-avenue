import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const setPassword = () => {
    const router = useRouter();
  return (
   <View style={styles.container}>
           <Image source={require("../../assets/bubbles/pw2/bb1.png")} style={[styles.blob, styles.topRight1]} />
            <Image source={require("../../assets/bubbles/pw2/bb2.png")} style={[styles.blob, styles.topRight2]} />
           <View style={styles.profileCircle}>
               <Image source={require("../../assets/profilePics/romina.png")} style={styles.profPic}/>
           </View>
           <Text style={styles.title}>Setup new password</Text>
           <Text style={styles.pwTitle}>Please, setup a new password for your account</Text>
   
            <TextInput style={[styles.inputBox, {marginTop:30}]} placeholder='New Password' placeholderTextColor={"#9b9999ff"} secureTextEntry={true}/>
            <TextInput style={[styles.inputBox, {marginTop:10}]} placeholder='Repeat Password' placeholderTextColor={"#9b9999ff"} secureTextEntry={true} />       
   
             <TouchableOpacity style={styles.saveBtn} onPress={()=>{
                     router.replace("/(auth)/passwordScreen");
                   }} >
                     <Text style={styles.nextTxt}>Save</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{marginTop:20}}>
                     <Text style={styles.cancelTxt}>Cancel</Text>
                   </TouchableOpacity>                
   
   
       </View>
  )
}

export default setPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
       
    },
    blob:{
    position: "absolute",
    resizeMode: "contain",
    opacity: 0.9,
    zIndex:2
    },
   topRight1:{
        left:139,
        top:-273,
        width:402,
        height:442,
        zIndex:3
    },
    topRight2:{
        left:80,
        top:-190,
        width:373,
        height:442
    },
    profileCircle:{
        backgroundColor:"#fff",
        height:105,
        width:105,
        // borderWidth:1,
        borderRadius:52.5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        // Android
        elevation: 10,
        // position:"absolute",
        top:10,
        zIndex:2,
        // alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:150
    },
    profPic:{
        height:91,
        width:91
    },
    title:{
        marginTop:28,
        fontFamily:"Raleway-Medium",
        fontSize:28,
        fontWeight:"700",
        
    },
    pwTitle:{
        marginTop:30,
        fontFamily:"NunitoSans",
        fontWeight:"300",
        fontSize:19,
        textAlign:"center"
    },
    circle: {
  width: 30,
  height: 30,
  borderRadius: 25,
  borderWidth: 2,
  borderColor: "#E5EBFC",
  justifyContent: "center",
  alignItems: "center",
  margin: 4,
},
focusedCircle: {
  borderColor: "#ffffffff", // highlight when active
},
inputBox:{
    width:"80%",
    height:52.5,
    backgroundColor:"#ebeaeaff",
    borderRadius:9,
    padding:5,
    fontSize:18,
    textAlign:"center",
    fontFamily:"NunitoSans"
  },
   saveBtn:{
    backgroundColor:"#FF5790",
    width:335,
    height:61,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
    marginTop:155
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