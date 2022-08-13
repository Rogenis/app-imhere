import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens/Home';
import { EventHub } from '../../screens/EventHub';
import { propsNavigationStack } from './Models';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function(){
    return (
        <Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Screen name="Home" component= {Home} />
          <Screen name="EventHub" component= {EventHub} />
        </Navigator>
    )
}