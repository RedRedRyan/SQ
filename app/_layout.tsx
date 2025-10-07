import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import '../global.css';



export default function RootLayout() {
  const [fontsLoaded, error]= useFonts({
    'Lato-Regular': require('@/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('@/assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('@/assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('@/assets/fonts/Lato-Black.ttf'),
    'Lato-Light': require('@/assets/fonts/Lato-Light.ttf'),
  });
  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);

  if(!fontsLoaded) return null;
  return <Stack screenOptions={{headerShown: false}} />;
}
