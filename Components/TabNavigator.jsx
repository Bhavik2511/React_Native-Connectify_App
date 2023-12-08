import Home from '../BottomTab/Home';
import AddPost from '../BottomTab/AddPost';
import Profile from '../BottomTab/Profile';
import Reels from '../BottomTab/Reels';
import Search from '../BottomTab/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet,Image} from 'react-native'

export function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarStyle:{backgroundColor:'#0D0C12'},
      }}>
      <Tab.Screen name="Home1" component={Home} options={{
        tabBarIcon:() =>(
          <Ionicons name='home-outline' color='white' size={35}/>
        )
      }}/>
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon:() =>(
          <Ionicons name='search-outline' color='white' size={35}/>
        )
      }}/>
      <Tab.Screen name="AddPost" component={AddPost} options={{
        tabBarIcon:() =>(
          <Icon name='plus-square-o' color='white' size={35}/>
        )
      }}/>
      <Tab.Screen name="Reels" component={Reels} options={{
        tabBarIcon:() =>(
          <Ionicons name='play-circle-outline' color='white' size={35}/>
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:() =>(
          // <Icon name='user-circle-o' color='white' size={30}/>
          <Image source={require('../assets/images/avatar.png')}
        style={styles.headerImage}/>
        )
      }}/>
    </Tab.Navigator>
  );
}
const styles=StyleSheet.create({
  headerImage:{
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8134AF',
  }
})
