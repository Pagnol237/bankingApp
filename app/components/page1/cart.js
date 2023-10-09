import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AutoHeightImage from 'react-native-auto-height-image'
import Logo from './images/cart.png'


export default function cart() {
  return (
    <View style={styles.main}>
        <LinearGradient
            colors={['#012d64', '#015ba8']}
            start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            style={styles.cartContainer}
        >

            <Text style={styles.acountNumber}>Account Number</Text>
            <Text style={styles.number}>247 *** *** 675</Text>
            <View style={styles.ifoContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.smalText} >Name</Text>
                    <Text style={styles.bigText}>Pagnol Consulting</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.smalText} >Expire</Text>
                    <Text style={styles.bigText}>08/27</Text>
                </View>

                <View>
                    <AutoHeightImage
                        source={Logo}
                        width={50}
                    />
      
                </View>

                
            </View>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        height:200,
        paddingLeft:20,
        paddingRight:20,
        marginTop:15,
    },
    cartContainer:{
        height:200,
        color:'white',
        borderRadius:20,
        padding: 15,
    },
    acountNumber:{
        color:'#ffffff',
        fontSize:12
    },
    number:{
        color:'#ffffff',
        fontSize:20,
        marginTop:10,
        letterSpacing:5
    },
    ifoContainer:{
        marginTop:75,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    smalText:{
        color:'#ffffff'
    },
    bigText:{
        color:'#ffffff',
        fontWeight:'800'
    },
    logoSize:{
        width:50,
        height:'40%'
    }
})