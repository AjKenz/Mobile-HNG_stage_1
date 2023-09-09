import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {

  const slackProfilePic = 'https://ca.slack-edge.com/T05FFAA91JP-U05RAFQHND9-1259424329d2-512'

  return (
    <View style={[styles.container, { padding: 10 }]}>
      <View style={styles.imageView}>
        <View style={styles.profilePicsContainer}>
          <Image source={{uri: slackProfilePic}} style={styles.profilePics} />
        </View>
        <Text style={styles.slackName}>AjKenz</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Web')} style={styles.button}>
        <Text style={styles.buttonText}>Open GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

function WebScreen() {
  const gitUrl = 'https://github.com/AjKenz'
  return (
    <View style={styles.container}>
      <WebView source={{ uri: gitUrl }} style={styles.webViewStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  profilePicsContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  profilePics: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slackName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
    alignSelf: 'flex-start',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,

  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 50,
    borderWidth: 2,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  },
  webViewStyle: {
    width: Dimensions.get('window').width
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1F2328',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Slack Identity' }} />
        <Stack.Screen name="Web" component={WebScreen} options={{ title: 'Git Profile', headerBackTitleVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}