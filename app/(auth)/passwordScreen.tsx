import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";

const CELL_COUNT = 8;   // 👈 8 characters
    const CORRECT_PASSWORD = "12345678"; // Replace with your password logic
     const router = useRouter();
const passwordScreen = () => {

    
    const [value, setValue] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleChange = (text) => {
    setValue(text);
    if (text.length === CELL_COUNT) {
      if (text === CORRECT_PASSWORD) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } else {
      setStatus(null);
    }
  };


  return (
    <View style={styles.container}>
        <Image source={require("../../assets/bubbles/pw1/bb1.png")} style={[styles.blob, styles.topLeft1]} />
        <Image source={require("../../assets/bubbles/pw1/bb2.png")} style={[styles.blob, styles.topLeft2]} />
        <View style={styles.profileCircle}>
            <Image source={require("../../assets/profilePics/romina.png")} style={styles.profPic}/>
        </View>

        <Text style={styles.title}>Hello, Romina</Text>
        <Text style={styles.pwTitle}>Type your password</Text>

                <View style={styles.pwInput}>
                    <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={handleChange}
                cellCount={CELL_COUNT}
                keyboardType="default"
                textContentType="oneTimeCode"
                secureTextEntry={false} // remove dot behavior
                renderCell={({ index, symbol, isFocused }) => {
                    // Determine background color
                    let bgColor = "#E5EBFC"; // default
                    if (index < value.length) {
                    bgColor = "#FF5790"; // dark color while typing
                    
                    }
                    if (status === "error") {
                    bgColor = "#EC4E4E"; // full red if error
                    }
                    if (status === "success") {
                    bgColor = "#7edb8dff"; // full green if success
                     setTimeout(() => {
                          router.replace("/(auth)/onboarding");
                      }, 800);
                                    
                    }

                    return (
                    <View
                        key={index}
                        onLayout={getCellOnLayoutHandler(index)}
                        style={[
                        styles.circle,
                        { backgroundColor: bgColor, borderColor:bgColor }, // dynamic bg
                        isFocused && styles.focusedCircle,
                        ]}
                    />
                    );
                }}
                />
                </View>

                <TouchableOpacity onPress={()=>{
                    router.replace("/(auth)/passwordRecoveryScreen")
                }}>
                    <Text style={styles.forgotTxt}>Forgot your password?</Text>
                </TouchableOpacity>                    


    </View>
  )
}

export default passwordScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
    },
     blob:{
    position: "absolute",
    resizeMode: "contain",
    opacity: 0.9,
    zIndex:2
    },
    topLeft1:{
        left:-158,
        top:-171,
        width:402,
        height:442
    },
    topLeft2:{
        left:-70,
        top:-120,
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
        zIndex:3
        
    },
    pwTitle:{
        marginTop:30,
        fontFamily:"NunitoSans",
        fontWeight:"300",
        fontSize:19
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

  dot: {
    fontSize: 56,
    color: "#202020",
  },
  errorCircle: {
    borderColor: "red",
  },
  successCircle: {
    borderColor: "green",
  },
  errorText: {
    marginTop: 20,
    color: "red",
    fontSize: 56,
  },
  successText: {
    marginTop: 20,
    color: "green",
    fontSize: 16,
  },
  pwInput:{
    marginTop:20
  },
  forgotTxt:{
    fontSize:15,
    fontFamily:"NunitoSans",
    fontWeight:"300",
    marginTop:38
  }
})