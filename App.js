import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './routes/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
