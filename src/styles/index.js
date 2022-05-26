import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
    },
    restaurantCard: {
        width: '100%',
        marginVertical: 16,
        backgroundColor: 'orange',
        color: 'grey',
        borderRadius: 6,
    },
    restaurantsName: {
        color: 'teal',
        fontSize: 65,
        fontWeight: 600,
        marginTop: 150
    },
    cusine: {
        fontSize: 16,
        fontWeight: '100',
        color: '#ff333',
    },
    address: {
        fontSize: 14,
        fontWeight: '300',
        color: '#303030',
        marginBottom: 8, 
    },

});