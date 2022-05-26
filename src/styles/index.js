import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0000',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
        
    },
    restaurantCard: {
        width: '100%',
        marginTop: 10,
        backgroundColor: 'orange',
        color: 'purple',
        borderRadius: 6,
    },
    restaurantsName: {
        paddingHorizontal: 10,
        color: 'teal',
        fontSize: 35,
        fontWeight: '200',
        marginTop: 15
    },
    cuisine: {
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '100',
        color: 'white',
    },
    address: {
        paddingHorizontal: 10,
        width: '100%',
        fontSize: 14,
        fontWeight: '300',
        color: '#303030',
        marginBottom: 8, 
    },

});