import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Registration = ({navigation}) => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={30}
                style={styles.icon}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.mainbody}>
                {/* <Image
                    source={require('../assets/images/Connectify.png')}
                    style={styles.image}
                    
                  /> */}
                <Text style={styles.headding}>Create Account.</Text>
                <TextInput
                  placeholder="Phone Number or email"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"
                />
                <TextInput
                  placeholder="Full Name"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"
                />
                <TextInput
                  placeholder="Connectify Id"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textinput}
                  secureTextEntry={true}
                  placeholderTextColor="#a9a9a9"
                />
                <TouchableOpacity>
                  <Text style={styles.logintext}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.passtext}>
                  Have an Account?
                <TouchableOpacity><Text style={{color: 'blue', fontSize: 16}} onPress={() => navigation.navigate('Login')}> Sign In</Text></TouchableOpacity>  
                </Text>
              </View>
              <View style={styles.bottom}>
                {/* <TouchableOpacity>
                    <Text style={styles.newacctext}>Create new account</Text>
                  </TouchableOpacity> */}
                <Text style={styles.sign}>by. Bhavik</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    backgroundColor: '#0D0C12',
    height: '100%',
    width: '100%',
  },
  wrapper: {
    //   backgroundColor: 'darkgrey',
    margin: 10,
    height: '100%',
  },
  mainbody: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    // flexWrap: "wrap",
    // alignItems:"stretch",
  },
  icon: {
    color: 'white',
  },
  // image: {
  //   position: 'relative',
  //   top: '-12%',
  //   left: '35%',
  //   height: 100,
  //   width: 100,
  // },
  headding: {
    color: 'white',
    position: 'relative',
    top: '-5%',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
  },
  textinput: {
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 12,
    marginTop: 13,
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: '#252525',
    color: 'white',
  },

  logintext: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 13,
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
    backgroundColor: 'blue',
    borderWidth: 1.5,
    borderColor: 'blue',
    width: '100%',
    height: 45,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  passtext: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  newacctext: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    fontSize: 17,
    fontWeight: '400',
    color: 'blue',
    // backgroundColor: 'blue',
    borderWidth: 1.5,
    borderColor: 'blue',
    width: '100%',
    height: 45,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottom: {
    // position: "absolute",
    // bottom: 10,
    // backgroundColor: "grey",
    // width: "100%",
    // flex: 1,
    // justifyContent:"flex-end",
  },
  sign: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'DancingScript-VariableFont_wght',
    fontSize: 25,
    textAlign: 'center',
  },
});
