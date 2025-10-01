import React from 'react';
import { Image, StyleSheet } from 'react-native';
import "../../global.css";


const login = () => {
  return (
    <>
    <Image source={require("../../assets/bubbles/login/bb1.png")} style={[styles.blob, styles.topLeft1]} />
    <Image source={require("../../assets/bubbles/login/bb2.png")} style={[styles.blob, styles.topLeft2]} />
    <Image source={require("../../assets/bubbles/login/bb3.png")} style={[styles.blob, styles.right]} />
    <Image source={require("../../assets/bubbles/login/bb4.png")} style={[styles.blob, styles.rightBottom]} />
    
    
    </>
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
    topLeft1:{
        left:-158,
        top:-171,
        width:402,
        height:442

    },
    topLeft2:{
        width:373,
        height:442,
        top:-171,
        left:-136,
        transform: [{ rotate: '158deg' }]
    },
    right:{

    },
    rightBottom:{

    }
})