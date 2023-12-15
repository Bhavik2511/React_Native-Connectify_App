import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ActivityIndicator
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { useState } from 'react';

const Forgot_email = ({navigation}) => {

  const[email, setemail] = useState('')
  const[loding, setloding] = useState(false)

  const emailhandler=()=>{
    if(email == ''){
      alert("Please enter your Email")
    }
    else{
      setloding(true)
      fetch('http://10.0.2.2:3000/forgotpassword',{
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      })
      .then(res => res.json()).then(
        data => {
          if(data.error === "Email Didn't Match, to Registered Email"){
            alert('Invalid Credentials')
            setloding(false)
          }
          else if(data.message === "Verification Code sent to your Email"){
            setloding(false)
            alert(data.message)
            navigation.navigate('Forgot_code', {
              useremail: data.email,
              userVerificationCode: data.verificationcode
            })
          }
        }
  
      )
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
                  placeholder="Enter Registered mail"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"

                  onChangeText={(text) =>{setemail(text)}}


                />
                {
                  loding ? <ActivityIndicator 
                  size={'extralarge'} 
                  color={'white'}
                  style={{paddingTop: 10}}
                  />
                   : 
                  <TouchableOpacity >
                  <Text style={styles.logintext} onPress={()=> emailhandler() }>Next</Text>
                </TouchableOpacity>
                }
               
                {/* <TouchableOpacity >
                  <Text style={styles.logintext} onPress={()=> emailhandler() }>Next</Text>
                </TouchableOpacity> */}
              {/* navigation.navigate('FPcode') */}
              </View>
              <View style={styles.bottom}>
                <Text style={styles.sign}>by. Bhavik</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default Forgot_email

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