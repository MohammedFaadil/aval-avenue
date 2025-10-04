import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderBar = ({ title }) => {
  const insets = useSafeAreaInsets(); // get safe area insets

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>{title}</Text>

    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    height: 90, // base height, top padding will add to it
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft:30,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 28,
    color: '#121212',
    fontFamily: 'Raleway-Black',
  },
});
