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

const FPusername = ({navigation, route}) => {
    const{email}= route.params
    const[username, setusername] = useState('')
    const[loding, setloding] = useState(false)

    const usernamehandler=()=>{
        if(username == ''){
            alert("Please enter your Username")
        }
        else{
            setloding(true)
            fetch('http://10.0.2.2:3000/usernamechange',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email : email,
                    username : username
                })
            })
            .then(res => res.json()).then(
                data =>{
                    if(data.message === "Username Avaialable"){
                        setloding(false)
                        alert("Username set successfully")
                        navigation.navigate('SetPassword', {email: email, username: username});
                    }
                    else{
                        setloding(false)
                        alert("Username is not available")
                    }
                }
            )
            .catch((error)=>{console.log(error)})
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
                  placeholder="Username"
                  style={styles.textinput}
                  placeholderTextColor="#a9a9a9"

                  onChangeText={(text)=> setusername(text)}
                />
                {
                    loding ? <ActivityIndicator 
                    size={'extralarge'} 
                    color={'white'}
                    style={{paddingTop: 10}} />
                    :
                    <TouchableOpacity >
                  <Text style={styles.logintext} onPress={()=> usernamehandler()}>Next</Text>
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
  )
}

export default FPusername

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