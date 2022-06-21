import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BottomNavbar from './BottomNavbar'
//import { Icon } from "@rneui/themed";
import { Switch as sw } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer'
import Alarm from './Alarm';
import StopTimer from './StopTimer';
import

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <BottomNavbar />
            <View style={styles.homecontent}>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/worldclock">
                    {/* world clock component */}
                    {/* <Home /> */}
                    <View style={styles.plus}>
                    <AntDesign name="plus" size={30} color="#F27405" />
                    {/* <Icon
                        name='add'
                        type='material'
                        color='#F27405'
                    //size='30'
                    //height="10"
                    /> */}
                </View>
                <Text style={styles.text}>World Clock</Text>
                <sw
                    value={true}
                    color="#F27405"
                />
                <sw
                    value={true}
                    color="#F27405"
                />

                </Route>
                <Route path="/stopwatch">
                    <StopTimer />
                </Route>
                <Route path="/alarm">
                    <Alarm />
                </Route>
            </Switch>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //marginTop: 1,
        backgroundColor: "#1A1A1A",
        color: "white",
        height: "100%",
        //justifyContent: "flex-end"
        flexDirection: "column-reverse"
    },
    homecontent: {
        height: "90%",
        marginRight: 30,
        marginLeft: 30,
    },
    plus: {
        flexDirection: "row-reverse",
        marginTop: 30,
        //marginRight: 200,
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        //marginTop: 10,
        fontFamily: "Roboto"
    },

})