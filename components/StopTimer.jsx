import { View, Text } from 'react-native'
import React from 'react'
import { Stopwatch } from 'react-native-stopwatch-timer'

export default function StopTimer() {
    return (
        <View>
            <Text>StopWatch</Text>
            <Stopwatch
                laps
                msecs
            />
        </View>
    )
}