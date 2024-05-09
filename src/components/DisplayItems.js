
import React, { useState } from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { Divider, List } from 'react-native-paper';
import { InputMode } from 'react-native-paper/lib/typescript/src/components/TextInput/Adornment/enums';
import { useSelector, UseSelector } from 'react-redux';




const Display=()=>{
  
  const budgetItems=useSelector((state)=>state.Reducer.budgetItems)
  
  const renderItem=({item})=>(
      <View>
        <List.Item title={item.name}/>
        <Divider/>
      </View>
  );

  
  return(

    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText} >Budget Entry Listing</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
        <Text style={styles.itemText} >Hi</Text>
        <Text style={styles.itemText} >John</Text>
        <Text style={styles.itemText} >doe</Text>
        </View>
      </View>
          */}
          <View>
            <Text style={{fontSize:25}}>List of Item</Text>
            <Divider/>
            <FlatList
             data={budgetItems}
             keyExtractor={(item)=>item.name}
             renderItem={renderItem}/>
          </View>
    </View>
    
  );

}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f9f9f9',
    
    
    
  },
  header:{
       paddingVertical:20,
       paddingHorizontal:16,
       marginBottom:16,
       backgroundColor:'#333'
  },
  headerText:{
    color:'#fff',
     fontSize:24,
     fontWeight:'bold',
     textAlign:'center',
  },
  itemContainer:{
    flex:1,
    padding:16,
  },
  item:{
    backgroundColor:'#fff',
    borderRadius:8,
    padding:16,
    marginBottom:16,
    shadowColor:'#000',
    shadowOpacity:0.5,
    shadowRadius:10,
    elevation:3,
  },
  itemText:{
    fontSize:16,
    marginBottom:8,
  },
  
});
export default Display