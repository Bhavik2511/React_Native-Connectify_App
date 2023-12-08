import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    
    <View style={styles.container}>
      <View style={styles.wrapper1}>
        {/* <Image
          source={require('../assets/images/Connectify.png')}
          style={{height: 120, width: 120}}
        /> */}
        <Text style={styles.text}>Connectify</Text>
      </View>

      <View style={styles.wrapper2}>
        <Text
          style={{color: 'white', fontSize: 17, fontFamily: 'Poppins-Medium'}}>
          from
        </Text>
        <Text style={styles.text1}>Bhavik Sharma</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0C12',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper1: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'DancingScript-VariableFont_wght',
  },
  wrapper2: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontFamily: 'DancingScript-VariableFont_wght',
    fontSize: 25,
  },
});
