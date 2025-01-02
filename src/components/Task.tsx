import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../Theme/Color'

const Task = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Task</Text>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        margin: 10, borderRadius: 10, padding: 20, backgroundColor: Color.task,
    },
    text: { color: Color.text, fontFamily: "Satoshi-Medium" }
})