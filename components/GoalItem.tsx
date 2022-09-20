import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

type GoalItemProps = {
    goal: { text: string, id: string },
    deleteGoal(goalId: string): any

}

// Todo: Incorporate type GoalItemProps
export default function GoalItem(this: any, props: any) {
    return (
        <View style={styles.goalItem}>
            <Pressable style={pressed => pressed.pressed && styles.pressedItem} android_ripple={{ color: '#dddddd' }} onPress={props.deleteGoal.bind(this, props.id)}>
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#ffffff',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
})