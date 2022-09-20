import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'

type GoalInputProps = {
    addGoal(userInput: string): void;
    modalVisibility: boolean;
    closeModal(): void;
}

export default function GoalInput(props: GoalInputProps) {
    const [userInput, setUserInput] = useState<string>();

    const goalInputHandler = (userText: string) => {
        setUserInput(userText);
    }

    const addGoalHandler = () => {
        if (userInput) {
            props.addGoal(userInput);
            setUserInput('');

        }
    }

    return (
        <Modal visible={props.modalVisibility} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your goal!' onChangeText={goalInputHandler} value={userInput}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' color={'#b180f0'} onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color={'#f31282'} onPress={props.closeModal}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        borderRadius: 6
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})
