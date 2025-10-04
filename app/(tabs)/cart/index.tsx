import HeaderBar from '@/components/HeaderBar'
import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import cartData from "../../../data/cart/cart.json"
import wishData from "../../../data/wishlist/wishlist.json"

const Cart = () => {
  // Local states for cart quantities
  const [cartItems, setCartItems] = useState(cartData);

  // Map for local images (adjust as needed)
  const cartImageMap: Record<string, any> = {
    "1": require("../../../assets/images/wishlist/1.png"),
    "2": require("../../../assets/images/wishlist/2.png"),
    "3": require("../../../assets/images/wishlist/3.png"),
  };

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

  const increaseQty = (index: number) => {
    const updated = [...cartItems];
    updated[index].Quantity += 1;
    setCartItems(updated);
  };

  const decreaseQty = (index: number) => {
    const updated = [...cartItems];
    if (updated[index].Quantity > 1) {
      updated[index].Quantity -= 1;
      setCartItems(updated);
    }
  };
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.Price.replace('$','')) * item.Quantity, 0);


  return (
    <View style={styles.container}>
      <HeaderBar title="Cart" />

      {/* Address Section */}
      <View style={styles.addressBox}>
        <Text style={styles.addressTitle}>Shipping Address</Text>
        <View style={styles.addressField}>
          <Text style={styles.addressTxt}>
            26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
          </Text>
          <TouchableOpacity style={styles.addressBtn}>
            <Image source={require("../../../assets/icons/edit.png")} style={styles.editImg} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Combined Scroll */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Cart List */}
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => "A" + index}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Image source={cartImageMap[item.Image]} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.Title}</Text>
                <Text style={styles.cardPrice}>{item.Price}</Text>
                <View style={styles.detailsRow}>
                  <View style={styles.additionalDetails}>
                    <Text style={styles.addItem}>{item.Color}</Text>
                    <Text style={styles.addItem}>{item.Size}</Text>
                  </View>
                  <View style={styles.quantityBtns}>
                    <TouchableOpacity onPress={() => decreaseQty(index)} style={styles.changeBtn}>
                      <Text style={styles.changeBtnTxt}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                      <Text>{item.Quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => increaseQty(index)} style={styles.changeBtn}>
                      <Text style={styles.changeBtnTxt}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        {/* Wishlist */}
        <Text style={styles.sectionTitle}>From your Wishlist</Text>
        <FlatList
          data={wishData}
          contentContainerStyle={{ paddingBottom: 80 }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
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
                    {/* <Image source={require("../../../assets/icons/Delete.png")} style={styles.DelBtn} /> */}
                    <Image source={require("../../../assets/icons/Add.png")} style={styles.addBtn} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.totalText}>Total  ${total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutBtnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  quantityBtns:{
     flexDirection:"row",
  justifyContent:"flex-end",
  alignItems:"center",
    gap:5
  },
  scrollContainer: {
    marginTop: 20,
  },
  addressBox: {
    padding: 15,
    backgroundColor: "#e2e1e1ff",
    borderRadius: 15,
  },
  addressTitle: {
    fontFamily: "NunitoSans",
    fontSize: 21,
    fontWeight: "bold",
  },
  addressField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  addressBtn: {
    backgroundColor: "#FF5790",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  addressTxt: {
    width: "80%",
    fontFamily: "NunitoSans",
    fontSize: 15,
    fontWeight: "100",
  },
  editImg: {
    height: 13.5,
    width: 13.5,
  },
  sectionTitle: {
    fontSize: 20,
    // fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    fontFamily:"Raleway-Black"
  },
  card: {
    flexDirection: "row",
    // backgroundColor: "#ffffffff",
    // padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  cardImage: {
    width: 120,
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
  },
  cardInfo: {
    flex: 1,
    padding:20
  },
  cardTitle: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily:"NunitoSans"
  },
  cardPrice: {
    fontSize: 18,
    color: "#000000ff",
    marginTop: 2,
    fontFamily:"Raleway-Black",
  },
  cardDetails: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
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
  justifyContent:"flex-end",
  alignItems:"center",
  gap:20
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
  justifyContent:"space-between",
  alignItems:"center"
},
quantity:{
  backgroundColor:"#E5EBFC",
  width:37,
  height:30,
  textAlign:"center",
  textAlignVertical:"center",
  justifyContent:"center",
  alignItems:"center"
},
changeBtn: {
  borderWidth: 2,
  borderRadius: 15,
  borderColor: "#FF5790",
  width: 25,
  height: 25,
  alignItems: "center",
  justifyContent: "center",
},
changeBtnTxt: {
  color: "#FF5790",
  fontSize: 20,
  // fontFamily: "Raleway-Black",
  textAlign: "center",
  includeFontPadding: false, // 👈 Android fix
},
bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: { fontSize: 26,     fontFamily:"Raleway-Black" },
  checkoutBtn: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,

  },
  checkoutBtnText: { color: '#fff', fontSize: 16, fontFamily:"NunitoSans" },
})
