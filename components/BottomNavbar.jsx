import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'react-router-native';

const BottomNavbar = () => {
    const buttonPress =(e)=>{
        console.log(e.target.value)
    }
    return (
        <View style={styles.containers}>
            <TouchableOpacity>
                <View style={styles.navContent}>
                    <Link to='/worldclock'>
                        <Ionicons name="globe-outline" size={24} color="#F27405" onPress={buttonPress}/>
                    <Text style={styles.text}>World Clock</Text>
                    </Link>
                </View>
            </TouchableOpacity>

            <View style={styles.navContent}>
            <Link to='/alarm'>

                <Ionicons name="alarm-outline" size={24} color="white" />
                <Text style={styles.text}>Alarm</Text>
                </Link>
            </View>

            <View style={styles.navContent}>
            <Link to='/stopwatch'>

                <MaterialIcons name="timer" size={24} color="white" />
                <Text style={styles.text}>Stop Watch</Text>
                </Link>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    containers: {
        backgroundColor: "black",
        justifyContent: "space-around",
        height: 60,
        flexDirection: "row",
        padding: 4,
        alignItems: "center",
    },
    text: {
        //flexDirection: "column",
        color: "white",
    },
    navContent: {
        alignItems: "center",
    }
})

export default BottomNavbar