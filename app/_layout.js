import {Stack} from 'expo-router'

export default function layout() {
  return (
    <Stack screenOptions={{
      
    }}>
        <Stack.Screen name="(tabs)" options={{ headerShown:false}}/>
    </Stack>
  )
}