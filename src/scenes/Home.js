import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View, TouchableOpacity } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import styles from '../styles';

export default function Home({ navigation }) {
    const [ allRestaurants, setAllRestaurants] = useState();

    useEffect(() => {
        fetch('https://my-first-firestore-lm.web.app/restaurants')
            .then(res => res.json())
            .then(setAllRestaurants)
            .catch(console.error)
    },[])
    
    return (
<View style={styles.container}>
        <ScrollView>
        {!allRestaurants
        ? <ActivityIndicator size='large' color='red' />
        : allRestaurants.map(singleRest => (
            <TouchableOpacity key={singleRest.id} 
            onPress={() => navigation.navigate('Details')}>
            <RestaurantCard singleRest={singleRest} />
            </TouchableOpacity>
            ))
        }
    </ScrollView>
</View>
)
}