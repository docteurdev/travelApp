import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import Liked from '../components/Liked';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs