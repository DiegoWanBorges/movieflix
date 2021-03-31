import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const navBar = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around"
    },
    goBack: {
        marginLeft: 20,
    },
    goBackImg: {
        width: 25,
        height: 25,
    },
    logoutBtn: {
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 2,
        width: 70,
        height: 30,
        alignItems: "center",
        marginRight: 20,

    },
    logoutText: {
        fontWeight: "bold",
        margin: 3,

    },
    title: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        marginLeft: 25,
    },
})
const home = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#525252",
        paddingTop: 70,
        alignItems: "center"
    },
    title: {
        paddingTop: 30,
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: -0.015,
        color: "#FFF",
    },
    image: {
        width: 340,
        height: 250,
    },
    subTitle: {
        paddingTop: 30,
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.015,
        color: "#F2F2F2",
    },
    loginButton: {
        marginTop: 30,
        backgroundColor: "#FFC700",
        width: 290,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        textAlign: "center",

    },
    arrowContainer: {
        backgroundColor: "#937D1C",
        height: 50,
        width: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    arrowImage: {
        width: 8,
        height: 14,
    },
    loginText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 20,

    },
    loginTextContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})
const login = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#525252",
        alignItems: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    title: {
        paddingTop: 90,
        paddingBottom: 60,
        fontWeight: "normal",
        fontSize: 30,
        lineHeight: 41,
        textAlign: "center",
        letterSpacing: -0.015,
        color: "#FFF",
    },
    form: {
        marginVertical: 10,
    },
    input: {
        width: 290,
        height: 50,
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10
    },
    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25
    },
    toggle: {
        marginLeft: -40
    },
})
const movies = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#525252",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },

})
const movieCard = StyleSheet.create({
    main: {
        backgroundColor: "#6C6C6C",
        borderRadius: 10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        marginBottom: 20,
        paddingTop: 20,
    },
    image:{
        maxWidth:"100%",
        maxHeight:"100%"
    },
    info:{
        padding:15,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: "#FFF",
    },
    subTitle: {
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: "#CDCDCD",
    },
    year: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.015,
        color: "#FFC700",
    },
    btnDetails:{
        marginTop:10,
        height:40,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#E1E1E1",
        justifyContent:"center",
        alignItems:"center",
     },
     btnText:{
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.015,
        color: "#FFF",
     }
})
export { navBar, home, login, movies, movieCard }