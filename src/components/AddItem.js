
import React, { useState } from 'react';

import {
  
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Text,
  TextInput,
  Button,
} from 'react-native-paper';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import { addToList } from './redux/Action';

const AddItem=({navigation})=>{
    const dispatch=useDispatch();
  const [name,setName]=useState('');
  const [pamount,setPamount]=useState('');
  const [amount,setAmount]=useState('');
  // const [list,setList]=useState([]);
 const handleSave=()=>{
   const data={
      name:name,
      pamount:pamount,
      amount:amount,
    }
    console.log(data);
      dispatch(addToList(data))
  }
  
     
  return(
  <SafeAreaView>
    <View style={styles.container}>
        <Text style={styles.head} >Budget Entry</Text>
        <TextInput style={styles.textInput} 
         placeholder='Enter Item Name'
         onChangeText={(text)=>setName(text)}
         value={name}/>
         <TextInput style={styles.textInput}  placeholder='Enter Planned Amount'
         onChangeText={(text)=>setPamount(text)}
         value={pamount}/>
         <TextInput style={styles.textInput}  placeholder='Enter Actual Amount'
         onChangeText={(text)=>setAmount(text)}
         value={amount}/>
         
         
    </View>
    <View style={styles.Button}>
      
      <Button  mode="contained" onPress={() => handleSave()}> Save
  </Button>
    </View>
    <View style={styles.Button}>
      <Button mode="contained" onPress={() => navigation.navigate('Display')}> Show Items</Button>
    </View>
    
  </SafeAreaView>
  )

}
const styles=StyleSheet.create({
  container:{
    backgroundColor: 'aliceblue',
    
    
    
  },
  head:{
       fontSize:40,
       textAlign:'center',
       fontWeight:'bold',
       marginBottom:150,
       backgroundColor:'beige'
  },
  textInput:{
    margin:35,
    marginBottom:20,

      
  },
  Button:{
    marginBottom:2,
    padding:30,
    borderRadius:10,

  }
  
})
export default AddItem