import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';


import { Entypo } from '@expo/vector-icons';
import Liked from './Liked';

const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {

    const { item } = route.params;
    // const [like, setLike] = useState(false)
    
   
    return (
        <View style={styles.container} >
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImg}
            >
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}
                >
                    <Entypo name="chevron-left"
                        size={24}
                        color={colors.white}
                    />

                </TouchableOpacity>
                <View
                    style={styles.titleWrapper}
                >
                    <Text style={styles.title}> {item.title} </Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}> {item.location} </Text>
                    </View>

                </View>

            </ImageBackground>
            <View style={styles.descriptionWrapper} >
                <TouchableOpacity style={styles.heart} 
                >
                    <Entypo name="heart" size={24} color= {colors.orange} />
                </TouchableOpacity>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}> Description </Text>
                    <Text style={styles.descriptionText}> {item.description} </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> PRIX </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> {item.price} cfa</Text>
                            <Text style={styles.infoSubText}> /person </Text>
                        </View> 
                    </View> 

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> LIKES </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> {item.rating} </Text>
                            <Text style={styles.infoSubText}> /5 </Text>
                        </View> 
                    </View> 

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> DUREE </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> {item.duration} </Text>
                            <Text style={styles.infoSubText}> /heure </Text>
                        </View> 
                    </View> 
                </View>
            </View >
            <TouchableOpacity style={styles.btnWrapper}>
                <Text  style={styles.btnTitle}>Book now </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    descriptionWrapper: {
        backgroundColor: colors.white,
        flex: 1,
        marginTop: -20,
        borderRadius: 20
    },
    backgroundImg: {
        height: height * 0.6,
        justifyContent: "space-between"
    },

    backIcon: {
        marginLeft: 20,
        marginTop: 50,
    },

    locationWrapper: {
        flexDirection: "row"
    },

    title: {
        color: colors.white,
        fontSize: 25,
    },

    locationText: {
        color: colors.white
    },

    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40
    },

    heart: {
        position: "absolute",
        right: 40,
        top: -20,
        backgroundColor: colors.white,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    descriptionText:{
        color: colors.darkGray,
        textAlign: "left",
        height:85
    },

    descriptionTitle:{
      fontSize: 17,
      fontWeight:"bold",
      marginBottom: 10
    },
    descriptionTextWrapper:{
      marginTop: 30,
      marginHorizontal: 20
    },

    infoWrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },

    infoTextWrapper:{
      flexDirection: "row",
      alignItems: 'flex-end'
    }, 

    infoItem:{

    },

    infoTitle:{
        color: colors.darkGray,
        fontSize: 12
    },

    infoItem:{

    },

    infoText:{
        fontSize: 17,
        color: colors.orange,
        fontWeight: "bold"


    },

    infoSubText:{
        color: colors.darkGray,
        fontSize: 12
    },

    btnWrapper:{
        backgroundColor: colors.orange,
        marginHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 20,
        alignItems:'center',
        borderRadius: 50,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 3,
    },

    btnTitle:{
        color: colors.white,
        
    }





})

export default Details;