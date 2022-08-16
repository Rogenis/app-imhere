import { StatusBar } from 'react-native';
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