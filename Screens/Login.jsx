import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
const [email, setemail] =useState('');
const [password, setPassword] =useState('');
const [loding, setloding] =useState(false)
const loginhandler=() =>{
  if(email == '' || password==''){
    alert('Please Enter your email and password')
  }
  else{
    setloding(true)
    fetch('http://10.0.2.2:3000/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(async data =>{
      if(data.error){
        alert(data.error);
        setloding(false) 
      }
      else if(data.message === "Login Successfull"){
        setloding(false)
        await AsyncStorage.setItem('user', JSON.stringify(data) )
        navigation.navigate('Home', {data})
      }
    })
    .catch(error =>{
      setloding(false)
      alert(error)
    })
  }
}

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={30} style={styles.icon} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.mainbody}>
                
                <Text style={styles.image}>Connectify</Text>
                <TextInput
                  placeholder="Connectify email"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"
                  onChangeText={(text)=> setemail(text)}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textinput}
                  secureTextEntry={true}
                  placeholderTextColor="#a9a9a9"
                  onChangeText={(text)=> setPassword(text)}
                />

                {
                  loding ? 
                  <ActivityIndicator
                  size={'extralarge'} 
                    color={'white'}
                    style={{paddingTop: 10}} 
                    /> 
                  :
                  <TouchableOpacity>
                  <Text style={styles.logintext} onPress={()=> loginhandler()}>Log In</Text>
                </TouchableOpacity>
                }
                
                <TouchableOpacity>
                  <Text style={styles.passtext} onPress={()=> navigation.navigate('Forgot_email')}>Forgotten Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity>
                  <Text style={styles.newacctext} onPress={() => navigation.navigate('FPemail')}>Create new account</Text>
                </TouchableOpacity>
                <Text style={styles.sign}>by. Bhavik</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

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
    // backgroundColor: 'darkgrey',
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
  image: {
    position: 'relative',
    top: '-12%',
    left: '25%',
    color: 'white',
    fontSize: 50,
    fontFamily: 'DancingScript-VariableFont_wght',
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
