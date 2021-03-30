import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const navBar = StyleSheet.create({
    main:{
        display: "flex",
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent:"space-around"
    },
    goBack:{
        marginLeft:20,
    },
    goBackImg:{
        width:25,
        height:25,
    },
    logoutBtn:{
        borderRadius:10,
        borderColor:"#000",
        borderWidth: 2,
        width:70,
        height:30,
        alignItems:"center",
        marginRight:20,
        
    },
    logoutText:{
        fontWeight:"bold",
        margin: 3,
        
    },
    title:{
        color:"#000",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing:-0.015,
        marginLeft:25,
    },
})
const home = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#525252",
        paddingTop:70,
        alignItems:"center" 
    },
    title:{
        paddingTop:30,
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: -0.015,
        color: "#FFF",
    },
    image:{
        width:340,
        height:250,
    },
    subTitle:{
        paddingTop:30,
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.015,
        color: "#F2F2F2",
    },
    loginButton:{
        marginTop:30,
        backgroundColor:"#FFC700",
        width:290,
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        textAlign:"center",
        
    },
    arrowContainer:{
        backgroundColor:"#FFC700",
        height:50,
        width:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    loginText:{
        fontSize:14,
        fontWeight:"bold",
        color:"#000",
        marginLeft:20,
        
    },
    loginTextContent:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
    
})

export { navBar, home } 