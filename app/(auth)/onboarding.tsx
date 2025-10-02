import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding, { DotProps } from "react-native-onboarding-swiper";


const CustomDot = ({ selected }: DotProps) => (
    
  <View
    style={{
      width:18,
      height: 18,
      borderRadius: 9,
      marginHorizontal: 5,
      marginBottom:50,
      backgroundColor: selected ? "#FF5790" : "#C7D6FB",
    //   shadowColor: "#000",
    //   shadowOpacity: selected ? 0.3 : 0,
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 3,
    //   elevation: selected ? 4 : 0, // Android shadow
    }}
  />
);



export default function OnboardingScreen() {
          const router = useRouter();
    
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
      {/* Blob background */}
      <Image
        source={require("../../assets/bubbles/onboarding/bb1.png")}
        style={styles.blob}
      />

      <Onboarding
        containerStyles={{ backgroundColor: "transparent" }}
        DotComponent={CustomDot} // ✅ use custom dot
        bottomBarHighlight={false} // optional: removes default highlight
        pages={[
          {
            backgroundColor: "transparent",
            image: (
              <View style={styles.cardWrapper}>
                <Image
                  source={require("../../assets/bubbles/onboarding/card1.png")}
                  style={styles.cardImage}
                />
                <View style={styles.textBox}>
                  <Text style={styles.title}>Hello</Text>
                  <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed non consectetur turpis. Morbi eu eleifend lacus.
                  </Text>
                </View>
              </View>
            ),
          },
          {
            backgroundColor: "transparent",
            image: (
              <View style={styles.cardWrapper}>
                <Image
                  source={require("../../assets/bubbles/onboarding/card2.png")}
                  style={styles.cardImage}
                />
                <View style={styles.textBox}>
                <Text style={styles.title}>Ready?</Text>
                <Text style={styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.startBtn} onPress={()=>{router.replace("/(tabs)")}}>
                    <Text style={styles.startTxt} >Get started</Text>
                </TouchableOpacity>
                </View>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blob: {
    position: "absolute",
    top: -123,
    left: -147,
    width: 402,
    height: 442,
    resizeMode: "contain",
    zIndex: 0,
  },
  cardWrapper: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    paddingBottom: 60,
    elevation: 6,
  },
  cardImage: {
    width: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    color: "#121212",
    marginBottom: 6,
    fontFamily: "Raleway-Medium",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    fontFamily: "NunitoSans",
    lineHeight: 27,
    letterSpacing: 0,
  },
  textBox: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  startBtn:{
        backgroundColor:"#FF5790",
        width:200,
        height:61,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
  },
  startTxt:{
    fontFamily:"NunitoSans",
    fontSize:22,
    textAlign:"center",
    color:"white",
    fontWeight:"300"
  }
});
