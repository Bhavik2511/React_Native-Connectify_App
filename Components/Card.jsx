import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/EvilIcons';

const Card = ({userdata}) => {
  const [visible, setvisible] = useState(false)
  const hidecomment=()=>{
setvisible(true)
  }


  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.hedwrap}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: userdata.profile_pic}}
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>{userdata.username} </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical-sharp"
            size={25}
            style={{color: 'white'}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Imagewrapper}>
        <Image
          source={{uri: userdata.main_pic}}
          style={styles.image}
        />
      </View>

      <View style={styles.Footer}>
        <View style={styles.iconbar}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                size={30}
                style={{color: 'white'}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icons
                name="comment"
                size={35}
                style={{color: 'white', marginLeft: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="paper-plane-outline"
                size={30}
                style={{color: 'white', marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons
              name="bookmark-outline"
              size={30}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.liketext}>{userdata.likes} likes</Text>
        </View>

        <View style={styles.comment}>
          <Text>
            <Text style={styles.commenthedtext}>{userdata.username}</Text>
            <Text style={styles.commentbodytext}>
             {'  '} {userdata.description}
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={hidecomment} >
            <Text style={styles.viewcomment} >View all coments</Text>
          </TouchableOpacity>
          {
            visible  && <View>{
              userdata.comments.map((comment)=>{
                return <Text key={comment.id} style={styles.commentbodytext}>{comment.text}</Text>
              })
            }</View>
          }
          
          
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#252525',
    borderTopColor: '#252525',
    borderTopWidth: 0.5,
    marginBottom: 10,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  hedwrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8134AF',
  },
  headerText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },

  Imagewrapper: {
    width: '100%',
    height: 350,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 20,
  },

  Footer: {
    padding: 10,
  },
  iconbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  liketext: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  comment: {
    // width: '100%',
    // backgroundColor: 'skyblue',
  },
  commenthedtext: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  commentbodytext: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  viewcomment: {
    fontSize: 13,
    color: 'grey',
    fontFamily: 'Poppins-Regular',
  },
});
