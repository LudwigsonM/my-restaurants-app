import { Text, Image, View } from "react-native";
import styles from "../styles";

export default function RestaurantCard ({ singleRest }) {
    return (
        <View style={styles.restaurantCard}>
            <Text style={styles.restaurantsName}>
                {singleRest.name}
            </Text>
            <Text style={styles.cusine}>
            { singleRest.cusine}
            </Text>
            <Text style={styles.address}>
                {singleRest.address}
            </Text>
            <Image source={{ uri: singleRest.image }} style={{width: '100%', height: 250}} />
        </View>
    )
}