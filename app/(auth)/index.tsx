import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../../global.css";


export default function App() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Raleway-Black": require("../../assets/fonts/Raleway-Black.ttf"),
    "NunitoSans": require("../../assets/fonts/NunitoSans.ttf"),
    "Raleway-Medium": require("../../assets/fonts/Raleway-Medium.ttf")
  });

  if (!fontsLoaded) return null; // or splash



  return (
    <View className="flex-1 items-center justify-center bg-white">

    <View style={styles.circle}>
    <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
    </View>

      <Text style={styles.title}>
      Aval Avenue
      </Text>
      <Text style={styles.subTitle}>
       From fashion to essentials — all under women’s leadership.
      </Text>

      <TouchableOpacity style={styles.loginButton} onPress={()=>{
        router.replace("/(auth)/signup")
      }}>
        <Text style={styles.loginText}>Let's get started</Text>
      </TouchableOpacity>

      <View style={styles.signupView}>
        <Text style={styles.signupText}>I already have an account</Text>
        <View style={styles.signupButton}>
          <Text style={styles.signupButtonText}>➜</Text>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  circle:{
    backgroundColor:"#ffffffff",
    width:134,
    height:134,
    borderRadius:67,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Android
    elevation: 10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:90
  },
  title:{
    fontFamily:"Raleway-Black",
    fontSize:52,
    fontWeight:"600",
    marginTop:20,

  },
  logo:{
    width:81.4,
    height:92
  },
  subTitle:{
    fontFamily:"NunitoSans",
    fontSize:19,
    textAlign:"center",
    marginTop:20,
    marginBottom:165
  },
  loginButton:{
    backgroundColor:"#FF5790",
    width:335,
    height:61,
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center",
    
    
  },
  loginText:{
    fontFamily:"NunitoSans",
    fontSize:22,
    textAlign:"center",
    color:"white",
    fontWeight:"300"

  },
  signupView:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginTop:30,
    gap:25
  },
  signupText:{
    fontFamily:"NunitoSans",
    fontWeight:"600",
    fontSize:15,
    textAlignVertical:"center"
  },
  signupButton:{
    backgroundColor:"#004CFF",
    height:30,
    width:30,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center"
  },
  signupButtonText:{
    fontSize:14,
    textAlign:"center",
    textAlignVertical:"center",
    color:"#ffffff"
  }
});