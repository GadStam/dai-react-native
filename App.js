import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import MainStack from './navigation/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContextProvider } from './contextState';


export default function App() {
  
  return (
   <ContextProvider>
 <MainStack/> 
 </ContextProvider>
    

  );

}
