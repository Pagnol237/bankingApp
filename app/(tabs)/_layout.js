
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function() {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{ 
          headerShown:false,
          tabBarLabel:"home",
          tabBarIcon:({color,size,focused})=>(<Ionicons name={focused?'home':'home-outline'} color={focused?'#015ba8':'grey'} size={size} />)
          
          }}/>
        <Tabs.Screen name='histry' options={{ 
          headerShown:false,
          tabBarIcon:({color,size,focused})=>(<Octicons name={focused?'history':'history'} color={focused?'#015ba8':'grey'} size={size}/>)
          }}/>
        <Tabs.Screen name='profile' options={{ 
          headerShown:false,
          tabBarIcon:({color,size,focused})=>(<FontAwesome  name={focused?'user':'user-o'} color={focused?'#015ba8':'grey'} size={size} />)
          }}/>

          <Tabs.Screen name="infos" options={{
            headerShown:false,
            tabBarIcon:({color,size,focused})=>(<AntDesign name={focused?'infocirlce':'infocirlceo'}  color={focused?'#015ba8':'grey'} size={size}/>)
          }}/>
    </Tabs>
  )
  
}