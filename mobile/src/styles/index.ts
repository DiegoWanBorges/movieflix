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


export { navBar } 