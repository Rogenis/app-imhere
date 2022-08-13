import { Home } from './src/screens/Home'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Route from './src/routes'

export default function App(){
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent  
      />
        <Route />
    </>
  );
}