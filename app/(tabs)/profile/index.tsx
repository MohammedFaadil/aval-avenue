import Recents from '@/components/Recents';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const profile = () => {
  const insets = useSafeAreaInsets(); // get safe area insets
  return (
    <View style={[styles.container, {paddingTop: insets.top}]} >
      {/* <Text>profile</Text> */} 
      <View style={styles.topBar}>
        <View style={styles.profileView}>
          <Image source={require("../../../assets/profilePics/avatar.png")} style={styles.avatar} />
          <TouchableOpacity style={styles.activityBtn}>
            <Text style={styles.activityBtnText}>My Activity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnsView}>
          <TouchableOpacity style={styles.BtnBg}>
            <Image source={require("../../../assets/icons/settings.png")} style={styles.settingsBtn} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleView}>
        <Text style={styles.titleTxt}>Hello, Amanda!</Text>
      </View>
      <View style={styles.announcementsBox}>
              <Text style={styles.annTitle}>Announcements</Text>
              <View style={styles.annField}>
                <Text style={styles.annText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.
                  </Text>
                <TouchableOpacity style={styles.annBtn}>
                  <Image source={require("../../../assets/icons/edit.png")} style={styles.annImg} />
                </TouchableOpacity>
              </View>
            </View>

            <Recents />

            <Text style={styles.ordersTxt}>My Orders</Text>
            <View style={styles.orderBtns}>
              <TouchableOpacity style={styles.orderBtn}>
                <Text style={styles.orderBtnTxt}>To Pay</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.orderBtn}>
                <Text style={styles.orderBtnTxt}>To Recieve</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.orderBtn}>
                <Text style={styles.orderBtnTxt}>To Review</Text>
              </TouchableOpacity>
            </View>
      
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    paddingHorizontal:20,
    
    flex:1
  },
  topBar:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  profileView:{
    flexDirection:"row",
    alignItems:"center",

  },
  btnsView:{
    alignItems:"center"
  },
  avatar:{
    height:43,
    width:43,
    borderRadius:22,
    borderWidth:2,
    borderColor:"#fff",
    marginRight:10,


  // Shadow for iOS
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,

  // Shadow for Android
  elevation: 5,
  },
  activityBtn:{
    width:115,
    height:35,
    borderRadius:18,
    backgroundColor:"#FF5790",
        justifyContent:"center",
    alignItems:"center"

  },
  activityBtnText:{
    color:"#fff",
    fontFamily:"Raleway-Medium",
    fontSize:16,

  },
  settingsBtn:{
    height:20,
    width:20
  },
  BtnBg:{
     alignItems:"center",
     backgroundColor:"#F8F8F8",
     height:38,
     width:38,
     borderRadius:19,
     justifyContent:"center"
  },
  titleView:{
    marginTop:20
  },
  titleTxt:{
    fontSize:28,
    fontFamily:"Raleway-Black"
  },
  announcementsBox: {
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    marginTop:20,
    marginBottom:20
  },
  annTitle: {
    fontFamily: "Raleway-Black",
    fontSize: 21,
    // fontWeight: "bold",
  },
  annField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  annBtn: {
    backgroundColor: "#FF5790",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  annText: {
    width: "80%",
    fontFamily: "NunitoSans",
    fontSize: 15,
    fontWeight: "100",
  },
  annImg: {
    height: 13.5,
    width: 13.5,
  },
  ordersTxt:{
        fontFamily: "Raleway-Black",
        fontSize:21,
        marginTop:10
  },
  orderBtns:{
    flexDirection:"row",
    gap:10,
    marginTop:10
  },
  orderBtn:{
    backgroundColor:"#FF5790",
    flex:1,
    borderRadius:18,
    alignItems:"center",
    justifyContent:"center",
    padding:6
  },
  orderBtnTxt:{
    fontSize:16,
    fontFamily:"NunitoSans",
    color:"#fff"
  }
  
})