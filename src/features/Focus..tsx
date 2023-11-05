import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';

export default function Focus() {
    const [input, setInput] = useState<string>('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    label="What would you like to focus on?"
                    value={input}
                    onChangeText={setInput}
                />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        justifyContent: 'center',
    },
    inputContainer: {
        padding: 25,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        marginRight: 10,
    },
});
