import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchContent from '../Components/SearchContent';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headtext}>bha_vik</Text>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('AddPost')}><Icon style={{marginRight: 20}} name='plus-square-o' color='white' size={35}/></TouchableOpacity>
        <TouchableOpacity><Ionicons name='menu-outline' color='white' size={35}/></TouchableOpacity>
        </View>


      </View>

      <View style={styles.imagewrapper}>
      <Image
              source={require('../assets/images/avatar.png')}
              style={styles.headerImage}
            />

            <View style={styles.outsidewrapper}>
              <View style={styles.insidewrapper}>
                <Text style={styles.numbertext}>26</Text>
                <Text style={styles.basetext}>Posts</Text>
              </View>

              <View style={styles.insidewrapper}>
                <Text style={styles.numbertext}>500</Text>
                <Text style={styles.basetext}>Followers</Text>
              </View>

              <View style={styles.insidewrapper}>
                <Text style={styles.numbertext}>800</Text>
                <Text style={styles.basetext}>Following</Text>
              </View>
            </View>
      </View>

      <View style={styles.status}>
        <Text style={styles.statustext}>somthing is very good.</Text>
        <Text style={styles.statustext}>somthing is very good.</Text>
        <Text style={styles.statustext}>somthing is very good.</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <View style={styles.buttonwrapper}><Text style={styles.buttontext}>Edit profile</Text></View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonwrapper}><Text style={styles.buttontext}>Share profile</Text></View>
        </TouchableOpacity>


      </View>
      <View>
      <SearchContent />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0D0C12',
    height: '100%',
    flexDirection: 'column'
  },
  header:{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headtext:{
    color: 'white',
    fontFamily:'Poppins-Medium',
    fontSize: 24,
    letterSpacing: 1,
  },
  imagewrapper:{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'grey'
  },
  headerImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    
  },

  outsidewrapper:{
    // backgroundColor: 'grey',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between'
  },
insidewrapper:{
  alignItems: 'center',
  justifyContent: 'center',
  marginright: 5,
},
numbertext:{
  color: 'white',
  fontFamily:'Poppins-Regular',
  fontWeight: '600',
  fontSize: 20,
},
basetext:{
  color: 'white',
  fontFamily:'Poppins-Regular',
  fontWeight: '600',
  fontSize: 15,
  letterSpacing: 1,
},
status:{
  padding: 10,
  // backgroundColor: 'red'
},
statustext:{
  color: 'white',
  fontFamily:'Poppins-Regular',
  fontWeight: '600',
  fontSize: 15,
  letterSpacing: 1,
},
buttons:{
  // backgroundColor: 'grey',
  padding: 10,
  flexDirection: 'row',
  justifyContent:'space-between',
  borderBottomWidth: .5,
  borderColor: 'grey',
},
buttonwrapper:{
  backgroundColor: '#252525',
  width: 180,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,

},
buttontext:{
  color: 'white',
  fontSize: 15,
  fontFamily:'Poppins-Regular',
  letterSpacing: 1,
}
})