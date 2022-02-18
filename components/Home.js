import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import colors from '../assets/colors/colors';

 import activitiesData from '../data/activitiesData';
import discoverData from '../data/discoverData';
import learnMoreData from "../data/learnMoreData";
// import discoverCategoriesData from "../data/discoverCategoriesData ";

// import {SefeAreaView} from "react-native-safe-area-context";

import person from '../assets/images/person.png'

const Home = ({ navigation }) => {

const renderDiscoveryData= ({item}) =>{
    return(
        <TouchableOpacity
         onPress={() =>navigation.navigate('Détail',{item: item})}
        >
            <ImageBackground
             source={item.image}
             style={{...styles.discoverItem, marginLeft: item.id === 'discover-1' ? 20 : 0}}
             imageStyle={styles.discoverItemImage}
            >
             <Text  style={styles.discoverItemTitle}>  {item.title} </Text>
             <View style={styles.discoverItemLocationWrapper}>
               <MaterialIcons name="location-on" size={18} color={colors.white} />
             <Text  style={styles.discoverItemLocationText}>  {item.location} </Text>

             </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const renderactivitiesData =({item}) =>{
    return(
        <View  style={styles.activityItemWrapper}>
            <Image source={item.image} style={styles.activitieItemImage}/>
            <Text style={[styles.activitieItemText, {marginLeft: item.id === 'activities-1' ? 20 : 0}]}> {item.title} </Text>
        </View>
    )
}

const renderlearnMoreItem = ({item}) =>{
    return(
        <ImageBackground
         style = {[styles.learnMoreItem,{ marginLeft: item.id ==='learnMore-1' ? 20 : 0}]}
         source ={item.image}
         imageStyle={styles.learnMoreImage}
        >
            <Text style = {styles.learnMoreItemText}> {item.title} </Text>
        </ImageBackground>
    )
}

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                {/* <SefeAreaView> */}
                <View style={styles.menuWrapper} >
                    <MaterialIcons name="menu" size={25} color={colors.black} style={styles.menuIcon} />
                    <Image source={person} style={styles.profileImage} />
                </View>
                {/* </SefeAreaView> */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle} >Découvrir</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoriyText, { color: colors.orange }]} >Tous</Text>
                        <Text style={styles.discoverCategoriyText} >Destinations</Text>
                        <Text style={styles.discoverCategoriyText} >Pays</Text>
                        <Text style={styles.discoverCategoriyText} >Expériences</Text>

                    </View>
                    <View  style={styles.discoverItemWrapper}>
                        <FlatList
                         data={discoverData}
                         renderItem= {renderDiscoveryData}
                         keyExtractor={item => item.id}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Activities */}
                <View style={styles.activitiesWrapper} >
                    <Text style={styles.activitiesTitle}>Activités</Text>
                    <View  style={styles.activitiesItemWrapper}>
                        <FlatList
                         data={activitiesData}
                         renderItem= {renderactivitiesData}
                         keyExtractor={item => item.id}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* learn more */}
                <View style={styles.learnMoreWrapper}>
                  <Text style={styles.learnMoreTitle}>Voir Plus</Text>
                  <View  style={styles.learnMoreItemsWrapper}>
                        <FlatList
                         data={learnMoreData}
                         renderItem= {renderlearnMoreItem}
                         keyExtractor={item => item.id}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.orange
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    menuIcon: {

    },
    profileImage: {
        width: 42,
        height: 42,
        borderRadius: 10
    },
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 32
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: "bold"
    },

    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 10
    },
    discoverCategoriyText: {
        marginRight: 30,
        color: colors.gray
    },

    // discoverCategoriyList:{
    //     // borderColor: "black",
    //     // borderWidth: 1,
    //     width:"100%",

    // },

    discoverItem:{
        marginTop: 10,
        width:170,
        height: 230,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical:15,
        marginRight:20
    },
    discoverItemImage:{
        borderRadius: 20,

    },
    discoverItemTitle:{
        color: colors.white,
        fontSize: 12,
        marginBottom: 2
    },
    discoverItemLocationWrapper:{
        flexDirection: "row",
        alignItems:"center"
    },
    discoverItemLocationText:{
        color: colors.white,
  
    },

    activitiesWrapper:{
        marginTop: 10,
    },

    activitiesTitle:{
       marginHorizontal: 20 ,
       fontSize: 16,
       color: colors.black,

    },

    activitiesItemWrapper:{
        marginTop: 10
    },

    activityItemWrapper:{
       justifyContent: "flex-end",
       alignItems:"center",
       marginRight: 20,
    }, 

    activitieItemImage:{
      width: 20,
      height: 20
    },

    activitieItemText:{
       fontSize: 10,
       marginTop: 5,
       color: colors.gray
    },

    learnMoreWrapper:{
        marginTop: 10
  
    },
    learnMoreTitle:{
     marginHorizontal: 20,
     fontSize: 16
    },

    learnMoreItemsWrapper:{
      paddingVertical:20
    },

    learnMoreItem:{
        width: 170,
        height: 180,
        justifyContent: "flex-end",
        marginRight: 20
    },

    learnMoreImage:{
      borderRadius: 20
    },

    learnMoreItemText:{
        color: colors.white,
        marginHorizontal: 15,
        marginVertical: 20
    }

})

export default Home;