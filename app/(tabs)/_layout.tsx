import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function TabsLayout() {
  const renderIcon = (source: any, focused: boolean) => (
    <View style={styles.iconWrapper}>
      <Image
        source={source}
        style={{
          width: 28,
          height: 28,
          tintColor: focused ? "#FF5790" : "#C7D6FB",
          resizeMode: "contain",
        }}
      />
      {/* underline at fixed position below icon */}
      <View
        style={[
          styles.underline,
          { backgroundColor: focused ? "#FF5790" : "transparent" },
        ]}
      />
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(require("../../assets/icons/shop.png"), focused),
        }}
      />
      <Tabs.Screen
        name="wishlist/index"
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(require("../../assets/icons/heart.png"), focused),
        }}
      />
      <Tabs.Screen
        name="categories/index"
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(require("../../assets/icons/categories.png"), focused),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(require("../../assets/icons/bag.png"), focused),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(require("../../assets/icons/group.png"), focused),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // make wrapper full height of tab bar
    position: "relative",
  },
  underline: {
    position: "absolute",
    bottom: -10, // distance from bottom of tab bar
    width: 10,
    height: 4,
    borderRadius: 2,
  },
});
