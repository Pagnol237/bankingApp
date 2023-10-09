import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function service() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Action</Text>
        <View style={styles.subContainer}>
            <View style={styles.icontainer}>
                <View style={styles.cercle}><MaterialCommunityIcons name="bank-transfer" size={30} color="white" /></View>
                <Text style={styles.serviceTitle}>e-transfer</Text>
            </View>
            <View style={styles.icontainer}>
                <View style={styles.cercle}><Fontisto name="shopping-pos-machine" size={30} color="white" /></View>
                <Text style={styles.serviceTitle}>e-payment</Text>
            </View>

            <View style={styles.icontainer}>
                <View style={styles.cercle}><FontAwesome name="shopping-basket" size={30} color="white" /></View>
                <Text style={styles.serviceTitle}>e-commerce</Text>
            </View>

            <View style={styles.icontainer}>
                <View style={styles.cercle}><MaterialIcons name="connect-without-contact" size={30} color="white" /></View>
                <Text style={styles.serviceTitle}>e-assistance</Text>
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        padding: 30,
    },
    title:{
        fontWeight:'700',
        color:'#3f3f3f'
    },
    subContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    cercle:{
        width:50,
        height:50,
        backgroundColor:'#015ba8',
        borderRadius:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    icontainer:{
        display:'flex',
        alignItems:'center',
    },
    serviceTitle:{
        fontSize:11,
        marginTop:5
    }
})