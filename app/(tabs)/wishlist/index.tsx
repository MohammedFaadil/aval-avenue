import HeaderBar from '@/components/HeaderBar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import recentsData from "../../../data/wishlist/recents.json";
import wishlistData from "../../../data/wishlist/wishlist.json";


const wishlist = () => {
  const imageMap: Record<string, any> = {
  "1": require("../../../assets/images/wishlist/1.png"),
  "2": require("../../../assets/images/wishlist/2.png"),
  "3": require("../../../assets/images/wishlist/3.png"),
  "4": require("../../../assets/images/wishlist/4.png"),
  "5": require("../../../assets/images/wishlist/5.png"),
  "6": require("../../../assets/images/wishlist/6.png"),
  "7": require("../../../assets/images/wishlist/7.png"),
  "8": require("../../../assets/images/wishlist/8.png"),
  "9": require("../../../assets/images/wishlist/9.png"),
  "10": require("../../../assets/images/wishlist/10.png"),
};
 const imageMapRecents: Record<string, any> = {
  "1": require("../../../assets/images/recents/1.png"),
  "2": require("../../../assets/images/recents/2.png"),
  "3": require("../../../assets/images/recents/3.png"),
  "4": require("../../../assets/images/recents/4.png"),
  "5": require("../../../assets/images/recents/5.png"),
  // "6": require("../../../assets/images/recents/6.png"),
  // "7": require("../../../assets/images/recents/7.png"),
  // "8": require("../../../assets/images/recents/8.png"),
  // "9": require("../../../assets/images/recents/9.png"),
  // "10": require("../../../assets/images/recents/10.png"), yet to be added
};


  return (
    <View style={styles.container}>
      <HeaderBar title="Wishlist" />
      <View style={styles.recents}>
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
              />
          </View>
          <View style={styles.wishlist}>
                <FlatList
                data={wishlistData}
                contentContainerStyle={{ paddingBottom: 80 }}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.wishlistItemWrapper}>

                   <Image source={imageMap[item.Image]} style={styles.itemImageWishlist} />

                    <View style={styles.wishlistDetails}>
                        <Text style={styles.wishlistTitleText}>{item.Title}</Text>
                        <Text style={styles.wishlistItemCost}>{item.Cost}</Text>
                        <View style={styles.detailsRow}>
                          <View style={styles.additionalDetails}>
                            <Text style={styles.addItem}>{item.Color}</Text>
                            <Text style={styles.addItem}>{item.Size}</Text>
                          </View>
                          <View style={styles.btns}>
                          <Image source={require("../../../assets/icons/Delete.png")} style={styles.DelBtn} />
                          <Image source={require("../../../assets/icons/Add.png")} style={styles.addBtn} />
                          </View>
                        </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
          </View>
      </View>
    </View>
  )
}

export default wishlist

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1,
    paddingHorizontal:20
  },
  recents:{
    
  },
  recentsRow:{
    flexDirection:"row",
    justifyContent:"space-between"

  },
  recentsTxt:{
    fontFamily:"Raleway-Medium",
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
wishlist:{
  // borderWidth:1
},
itemImageWishlist: {
  width: 121,
  height: 120,
  borderRadius: 8,
  borderWidth: 4,
  borderColor: "#fff",

  // Shadow for iOS
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,

  // Shadow for Android
  elevation: 5,
}
,
wishlistDetails:{
  // borderWidth:1,
  flex:1,
  padding:10
},
detailsRow:{
  flexDirection:"row",
  justifyContent:"space-between"
},
wishlistItemWrapper:{
  flexDirection:"row",
  marginTop:20
},
additionalDetails:{
  flexDirection:"row",
  marginTop:10
},
wishlistTitleText:{
  fontFamily:"NunitoSans",
  fontSize:18
},
wishlistItemCost:{
  fontFamily:"Raleway-Black",
  fontSize:18,
  marginTop:10
},
addBtn:{
  width:35,
  height:30
},
DelBtn:{
  height:35,
  width:35
},
addItem:{
  backgroundColor:"#E5EBFC",
  fontFamily:"Raleway-Medium",
  fontSize:14,
  marginRight:5,
  paddingHorizontal:6,
  paddingVertical:3,
  borderRadius:4
},
btns:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:20
}




})