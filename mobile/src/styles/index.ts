import { StyleSheet, Dimensions } from 'react-native'

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
        width:"100%",
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
        
        justifyContent:"space-around",
    },
    
    image:{
        width:"100%",
        height:200,

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
const movieFilter = StyleSheet.create({
    main:{
        backgroundColor: "#6C6C6C",
        borderRadius: 10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        marginBottom:10,
        paddingTop:14,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:17,
        
    },
    picker:{
        height:40,
        color:"#FFF",
    },
    pickerContainer:{
        borderWidth:1,
        borderColor:"#FFF",
        borderRadius:10
    }
    
})
const movieDetails = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: "#515151",
        padding:20,
        paddingVertical:15,
        
    }
})
const movieDetailsInfo = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: "#6C6C6C",
        borderRadius: 10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        paddingBottom:20,
        marginBottom:20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.015,
        color: "#FFF",
        paddingTop:17,
        paddingLeft:25,
    },
    image:{
        height:200,
        width:"100%",
        marginTop:15,
    },
    year:{
        paddingLeft:25,
        marginTop:15,
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 33,
        letterSpacing: -0.015,
        color: "#FFC700",
    },
    subTitle:{
        paddingLeft:25,
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: "#9E9E9E",
    },
    sinopse:{
        marginTop:15,
        paddingLeft:25,
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.015,
        color: "#FFF",
    },
    sinopseContent:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"#E1E1E1",
        textAlign:"justify",
        marginTop:5,
        marginLeft:20,
        marginRight:20,
    },
    sinopseText:{
        padding:20,
        textAlign:"justify",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: "#9E9E9E",
    }
})
const movieReview = StyleSheet.create({
    main:{
        backgroundColor: "#6C6C6C",
        borderRadius: 20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        marginBottom:20,
        padding:20,  
    },
    input:{
        height:100,
        backgroundColor:"#FFF",
        paddingLeft:15,
        paddingTop:10,
        textAlignVertical:"top",
        borderRadius: 10,
        justifyContent:"space-between",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: "#9E9E9E",
    },
    btn:{
        marginTop:10,
        borderRadius:10,
        height:50,
        backgroundColor:"#FFC700",
    },
    btnText:{
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 22,
        textAlign:"center",
        justifyContent:"center",
        letterSpacing: -0.015,
        color: "#000",
        paddingTop:15
    }
})
const movieReviewList = StyleSheet.create({
    main:{
        backgroundColor: "#6C6C6C",
        borderRadius: 20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        flex:1,
        marginBottom:50,
        paddingLeft:20,
        paddingRight:20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: -0.015,
        color: "#FFF", 
        paddingTop:10,
        paddingBottom:10,
        
    },
    userInfo:{
       flexDirection:"row",
       alignItems:"baseline",
       marginBottom:10,
    },
    image:{
         width:12,
         height:12,
        marginLeft:20,
        
    },
    userName:{
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: "#FFF",   
        paddingLeft:10,
        
    },
    sinopsyContent:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"#E1E1E1",
        marginBottom:15,
        padding:15,
    },
    sinopsyText:{
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: "#9E9E9E", 
    }
})
export { navBar, home, login, movies, movieCard, movieFilter,movieDetails,movieDetailsInfo,movieReview,movieReviewList }