import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const passwordRecoveryCodeScreen = () => {
  return (
    <View style={styles.container}>
       <Image source={require("../../assets/bubbles/pw2/bb1.png")} style={[styles.blob, styles.topRight1]} />
          <Image source={require("../../assets/bubbles/pw2/bb2.png")} style={[styles.blob, styles.topRight2]} />
          
    </View>
  )
}

export default passwordRecoveryCodeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
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
    }
})