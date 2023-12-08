import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Text style={styles.logo}>Connectify</Text>
      </View>
      <View style={styles.iconwrapper}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgetext}>11</Text>
          </View>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={30}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0C12',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  logowrapper: {
    // backgroundColor: 'lightblue',
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'DancingScript-VariableFont_wght',
  },
  iconwrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    marginHorizontal: 20,
  },
  badge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 13,
    bottom: 18,
    width: 25,
    height: 19,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  badgetext: {
    color: 'white',
    fontWeight: '700',
  },
});
