import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
        
    },
    restaurantCard: {
        width: '100%',
        paddingTop: 10,
        marginVertical: 25,
        backgroundColor: 'orange',
        color: 'purple',
        borderRadius: 6,
    },
    restaurantsName: {
        color: 'teal',
        fontSize: 35,
        fontWeight: '200',
        marginTop: 150
    },
    cusine: {
        fontSize: 16,
        fontWeight: '100',
        color: '#788788',
    },
    address: {
        fontSize: 14,
        fontWeight: '300',
        color: '#303030',
        marginBottom: 8, 
    },

});