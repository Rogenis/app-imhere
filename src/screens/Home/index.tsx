import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { propsStack } from '../../routes/Stack/Models/index'

import { styles } from "./styles";

  
export function Home() {
  const navigation = useNavigation<propsStack>();
  const [eventName, setEventName] = useState('');
  const [data, setData] = useState('');
  const [proprietario, setProprietario] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        I'm Here!
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do evento"
          placeholderTextColor="#6B6B6B"
          onChangeText={setEventName}
        />
       <TextInput 
          style={styles.input}
          placeholder="Data (ex: 11/11/11)"
          placeholderTextColor="#6B6B6B"
          onChangeText={setData}
        />
        <TextInput 
          style={styles.input}
          placeholder="Proprietário do evento"
          placeholderTextColor="#6B6B6B"
          onChangeText={setProprietario}
        />

        <Button 
          title='Confirmar'
          color={'#4169E1'}
          disabled={!eventName || !data || !proprietario}
          onPress={() => navigation.navigate("EventHub", {
            eventName: eventName,
            data: data,
            proprietario: proprietario
          })}
        />
      </View>
    </View>
  )
}