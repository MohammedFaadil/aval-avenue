import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";

const passwordRecoveryCodeScreen = () => {
  const CELL_COUNT = 4;   // 👈 8 characters
    const CORRECT_CODE = "1234"; // Replace with your correct otp logic
  const router = useRouter();

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
        if (text === CORRECT_CODE) {
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
            <View style={styles.container}>
                    {/* <Image source={require("../../assets/bubbles/pw1/bb1.png")} style={[styles.blob, styles.topLeft1]} />
                    <Image source={require("../../assets/bubbles/pw1/bb2.png")} style={[styles.blob, styles.topLeft2]} /> */}
                    <Image source={require("../../assets/bubbles/pw2/bb1.png")} style={[styles.blob, styles.topRight1]} />
                              <Image source={require("../../assets/bubbles/pw2/bb2.png")} style={[styles.blob, styles.topRight2]} />
                    <View style={styles.profileCircle}>
                        <Image source={require("../../assets/profilePics/romina.png")} style={styles.profPic}/>
                    </View>
                    <Text style={styles.title}>Password recovery</Text>
                    <Text style={styles.pwTitle}>Enter 4-digits code we sent you on your phone numberr</Text>

                    <Text style={styles.pNo}>+98*******00</Text>

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
            
    
                   
          
         
            
          
    
          <TouchableOpacity style={styles.nextBtn} onPress={()=>{
            if(status){
              router.replace("/(auth)/setPassword")
            }
            else{
              console.log("Invalid OTP. Access denied");
            }
          }
            }
            
            >
            
            <Text style={styles.nextTxt}>Next</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={{marginTop:30}}>
            <Text style={styles.cancelTxt} >Cancel</Text>
            </TouchableOpacity>                     
            
                                             
            
            
                </View>
        </View>
  )
}

export default passwordRecoveryCodeScreen

const styles = StyleSheet.create( {
    container:{
        backgroundColor:"#fff",
        flex:1,
        // justifyContent:"center",
        alignItems:"center"
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
  },
   row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent:"space-between",
    width:199,
    height:40,
    borderRadius:18
  },
  label: {
    fontSize: 18,
    marginHorizontal:50,
    fontFamily:"Raleway-Medium"

  },
  roundCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12, // makes it round
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:10
  },

  // Inner circle when checked
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF5790",
  },

  checked: {
    borderColor: "#FF5790",
    
  },
  nextBtn:{
     backgroundColor:"#FF5790",
    width:335,
    height:61,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
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
    },
    pNo:{
      marginTop:30,
      fontFamily:"NunitoSans",
      fontWeight:"700",
      fontSize:16,
      letterSpacing:1.6
    }
})