import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import  colors  from '../assets/colors/colors';

import Home from '../components/Home';
import Liked from '../components/Liked';
import Profile from '../components/Profile';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
   
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.gray,
      showLabel: false
    }}
    >
      <Tab.Screen name="Home" component={Home}
       options ={{
         tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" color={color} size={32} />
       }}
      />
      <Tab.Screen name="Liked" component={Liked} 
      options ={{
         tabBarIcon: ({color}) => <Entypo name="heart" size={24} color={color} />
      }} />
      <Tab.Screen name="Profile" component={Profile}
       options={{
         tabBarIcon: ({color}) => <Entypo name="user" size={24} color= {color} />
       }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar:{
   backgroundColor: colors.white,
   borderTopLeftRadius: 20,
   borderTopRightRadius:20
  }
})

export default Tabs