import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        height: 200,
        width: 200,
        alignSelf: "center",
        margin: 30,
    },
    subTitle: {
        /* borderWidth: 1,
        borderColor: 'red', */
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },
    subText:{
        fontSize: 16,
    },
    title: {
        /* borderWidth: 1,
        borderColor: 'red', */
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
    },
    button: {
        backgroundColor: '#6c63ff',
        borderRadius: 99,
        height: 48,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})