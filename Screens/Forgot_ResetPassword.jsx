import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ActivityIndicator,
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  const Forgot_ResetPassword = ({navigation, route}) => {
    const {email} = route.params
    const[password, setpassword] = useState('')
    const[confpassword, setconfpassword] = useState('')
    const[loding, setloding] = useState(false)
    const passwordhandler = () =>{
      if(password == '' || confpassword == ''){
        alert("Please enter your Password")
      }
      else if(password == confpassword){
        setloding(true)
        fetch('http://10.0.2.2:3000/passreset',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email : email,
                    password: password,
            
                })
            })
            .then((res)=> res.json()).then(
              data=>{
                if(data.message === "Password Changed Successfully"){
                  setloding(false)
                  alert(data.message)
                  navigation.navigate('Login')
                }
                else{
                  setloding(false)
                  alert("Please Try Again..")
                }
              }
            )
            .catch((err)=> 
            alert(err))
      }
      else{
        alert("Password Didn't matched")
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
                  {/* <Image
                    source={require('../assets/images/Connectify.png')}
                    style={styles.image}
                  /> */}
                  <Text style={styles.image}>Connectify</Text>
                  <TextInput
                    placeholder="New Password"
                    style={styles.textinput}
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(text) => setpassword(text)}
                  />
                  <TextInput
                    placeholder="Confirm Password"
                    style={styles.textinput}
                    secureTextEntry={true}
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(text) => setconfpassword(text)}
                  />

                  {
                    loding ? <ActivityIndicator 
                    size={'extralarge'} 
                    color={'white'}
                    style={{paddingTop: 10}} 
                     /> 
                     :
                    <TouchableOpacity>
                    <Text style={styles.logintext} onPress={()=>passwordhandler()}>Next</Text>
                  </TouchableOpacity>
                  }
                  
                  
                </View>
                <View style={styles.bottom}>
                  
                  <Text style={styles.sign}>by. Bhavik</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    );
  };
  
  export default Forgot_ResetPassword;
  
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
  