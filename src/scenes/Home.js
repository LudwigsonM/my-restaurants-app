import { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, ScrollView, View, TouchableOpacity } from 'react-native';
import { SingleRestContext } from '../../App';
import RestaurantCard from '../components/RestaurantCard';
import styles from '../styles';

export default function Home({ navigation }) {
    const [ allRestaurants, setAllRestaurants] = useState();
    const { setCurrentRest } = useContext(SingleRestContext)

    useEffect(() => {
        fetch('https://my-first-firestore-lm.web.app/restaurants')
            .then(res => res.json())
            .then(setAllRestaurants)
            .catch(console.error)
    },[])
    
    const handlePress = (singleRest) => {
        setCurrentRest(singleRest);
        navigation.navigate('Details');
    }

    return (
<View style={styles.container}>
        <ScrollView>
        {!allRestaurants
        ? <ActivityIndicator size='large' color='red' />
        : allRestaurants.map(singleRest => (
            <TouchableOpacity key={singleRest.id} 
                onPress={() => handlePress(singleRest)}>
            <RestaurantCard singleRest={singleRest} />
            </TouchableOpacity>
            ))
        }
    </ScrollView>
</View>
)
}