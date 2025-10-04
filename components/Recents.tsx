//import liraries
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import recentsData from "../data/wishlist/recents.json";

// create a component
const Recents = () => {
     const imageMapRecents: Record<string, any> = {
  "1": require("../assets/images/recents/1.png"),
  "2": require("../assets/images/recents/2.png"),
  "3": require("../assets/images/recents/3.png"),
  "4": require("../assets/images/recents/4.png"),
  "5": require("../assets/images/recents/5.png"),
  // "6": require("../../../assets/images/recents/6.png"),
  // "7": require("../../../assets/images/recents/7.png"),
  // "8": require("../../../assets/images/recents/8.png"),
  // "9": require("../../../assets/images/recents/9.png"),
  // "10": require("../../../assets/images/recents/10.png"), yet to be added
};
    return (
        <>
        <View style={styles.recentsRow}>
                    <Text style={styles.recentsTxt}>Recently viewed</Text>
                    <TouchableOpacity style={styles.recentBtn}>
                      <Text style={{  color:"#fff", fontSize:14}}>➜</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.recentsList}>
                     <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={recentsData.slice(0,5)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                          <TouchableOpacity style={styles.itemWrapper}>
              <Image source={imageMapRecents[item.Image]} style={styles.itemImage} />
                          </TouchableOpacity>
                        )}
                      /></View>
        </>
    );
};
// export default Recents;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    recentsRow:{
    flexDirection:"row",
    justifyContent:"space-between"

  },
  recentsTxt:{
        fontFamily: "Raleway-Black",
    fontSize:21,
      // marginHorizontal:30,
      // fontWeight:700
  },
 recentBtn: {
  backgroundColor: "#FF5790", // proper color
  height: 30, // enough to fit the arrow
  width: 30,  // same as height for circle
  borderRadius: 15, // half of height/width for circle
  justifyContent: "center", // center arrow vertically
  alignItems: "center", // center arrow horizontally
  overflow: "hidden", // ensures circle shape,
  color:"#fff",
  // marginHorizontal:20
},
recentsList:{
  flexDirection:"row",
  marginTop:20,
  padding:10,
  justifyContent:"center",
  alignItems:"center",
  
},
 
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    
  },

  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#FF5790",
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  itemWrapper: {
  marginRight: 12,
  borderRadius: 40,
  // justifyContent:"center",
  // Shadow for iOS
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  // Elevation for Android
  elevation: 4,
  backgroundColor: "#fff", // required for shadow to show on iOS
},

itemImage: {
  width: 60,
  height: 60,
  borderRadius: 40,
  borderWidth: 1,
  borderColor: "#ffffffff",
},
});

//make this component available to the app
export default Recents;
