import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function List1() {
    const [tranfert, setTransfert] = useState([
        {
            statut:'from',
            price:'+456 877',
            name:'lawrence',
            countNbr:'223461789854',
            tcolor:'green'
        },
        {
            statut:'from',
            price:'+1 956 007',
            name:'paola',
            countNbr:'351461693850',
            tcolor:'green'
        },
        {
            statut:'to',
            price:'-300 000',
            name:'ghislain',
            countNbr:'354961593130',
            tcolor:'red'
        }
    ])
  return (
    <View style={styles.main}>
        {tranfert.map((info,index)=>(
            
            <View style={styles.container} key={index}>
            <View style={styles.block1}>
                <Text style={styles.textStyle}>Transfer {info.statut} {info.name}</Text>
                <Text style={styles.textStyle}>{info.countNbr}</Text>
            </View>
            <View style={styles.block2}>
                <Text style={{color:info.tcolor ,textAlign:'right'}}>{info.price} XFA</Text>
            </View>
            <View></View>
            </View>

        ))}
        
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        shadowColor:'#171717',
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.18,
        shadowRadius:4,
        padding:20,
        marginTop:20,
        backgroundColor:'white',
        borderRadius:20,

    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    textStyle:{
        fontWeight:'200'
    },
    block2:{
        width:'50%'
    }
})