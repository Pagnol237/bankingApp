import { View, Text,StyleSheet, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import CurenBalance from '../components/page2/CurenBalance'
import Debit from '../components/page2/Debit'
import { AntDesign } from '@expo/vector-icons';
import Periode from '../components/page2/periode';
import List1 from '../components/page2/List1';
import List2 from '../components/page2/List2';

export default function histry() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles. scrollView}>
        <Text style={styles.firstTitle}>history</Text>
        <CurenBalance/>
        <Debit/>
        <View style={styles.header}>
          <Text style={styles.texte}>Listing</Text>
          <AntDesign name="download" size={24} color="black" />
        </View>
        <Periode/>
        <Text style={styles.date}>Sept 12, 2023</Text>
        <List1/>
        <Text style={styles.date}>Sept 18, 2023</Text>
        <List2/>
        <Text style={styles.date}>Sept 24, 2023</Text>
        <List1/>
        <Text style={styles.date}>Sept 29, 2023</Text>
        <List2/>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
    },
    scrollView:{
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20
    },
    firstTitle:{
      textAlign:'center',
      fontWeight:'600',
      color:'#3f3f3f',
      fontSize:30
    },
    header:{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      marginTop:55
    },
    texte:{
      fontWeight:'500',
      fontSize:20
    },
    date:{
      marginTop:20,
      fontWeight:'300'
    }
})