import React from "react";
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style = {styles.background}>
    <View style = {styles.imagemlogo}>
    <Image
    source={require('./src/assets/logo.png')}
    />
    </View>

    <View style = {styles.container}>
      <TextInput
      style = {styles.input}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={()=>{}}
      />
      <TextInput
      style = {styles.input}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={()=>{}}
      />
    </View>
    <View >
      <TouchableOpacity style = {styles.btn}>
        <Text>
          Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Criar Conta</Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>);
  
} 
const styles = StyleSheet.create({
background: {
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',

},

imagemlogo:{
  flex: 1,
  justifyContent:'center',

},
container:{
  flex:1,
  alignItems:'center',
  justifyContent: 'center',
  width:'90%',
},
input:{
  flex: 1,
  width:'90%',
  justifyContent:'center',
  alignContent:'center',
  marginBottom:15,
  color: '#222',
  fontSize:17,
  borderRadius:7,
  padding:10,
},
btn:{
  width:'90%',
  height:45,
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:7,
}

})