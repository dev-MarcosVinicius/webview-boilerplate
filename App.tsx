import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <WebView source={{ uri: 'https://app.rocketseat.com.br/' }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginTop: RFValue(30)
  },
});
