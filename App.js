
import { NavigationContainer, stackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { firebase } from './config';
import 'react-native-gesture-handler';


//import { Stack } from '@react-navigation/stack';

import Login from './src/Login';
import Registration from './src/Registration';
import Dashboard from './src/Dashboard';
import Header from './src/Header';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import Detail from './src/Detail';


const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user,setUser]= useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);

  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerTitle: () => <Header name="Login" />,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'#4c00b0',
            elevation:25
          }
        }} 
        
        />

        <Stack.Screen 
        name="Registration"
        component={Registration}
        options={{
          headerTitle: () => <Header name="Registration" />,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'#4c00b0',
            elevation:25
          }
        }} 
        
        />
         
      </Stack.Navigator>
    );
  }

return(
    <Stack.Navigator>
      
      <Stack.Screen
      component= {Home}
      name = 'Home'
      options={{
       headerTitle: () => <Header name = "Notes" />,
       headerStyle: {
         backgroundColor: '#4c00b0',
         height:120,
       
       }
      }}
     />

     <Stack.Screen 
      component = {NoteAdd}
      name = 'NoteAdd'
      options={{
       headerTitle: () => <Header name = "Add Notes" />,
       headerStyle: {
         backgroundColor: '#4c00b0',
         height:120,

       }
     }}
     />

     <Stack.Screen 
      component = {Detail}
      name = 'Detail'
      options={{
       headerTitle: () => <Header name = "Edit Notes" />,
       headerStyle: {
         backgroundColor: '#4c00b0',
         height:120,
       }
     }}
     />
      
    </Stack.Navigator>

  );

}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}