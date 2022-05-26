import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { useEffect, useState, } from 'react';
import RestaurantCard from './src/components/RestaurantCard';
import styles from './src/styles';

const backGrImage = { uri: 'https://c8.alamy.com/comp/M9DH04/waiter-wearing-the-uniform-holding-a-dish-of-chicken-cartoon-character-set-of-fun-flat-cartoon-person-M9DH04.jpg' }

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://my-first-firestore-lm.web.app/restaurants');
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={backGrImage} style={styles.container}>
        <SafeAreaView style={styles.container}>
        <ScrollView>
          {!allRestaurants 
            ? <ActivityIndicator size='large' color='red' />
            :    
            allRestaurants.map(singleRest => ( 
              <RestaurantCard key={singleRest.id} singleRest={singleRest} />
              )) 
            }
        </ScrollView>
              <Text styl={{ color: 'white', marginBottom: 20 }}>Welcome to our many restuarant options provided </Text>
            </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
