import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert} from 'react-native';

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredNumber) {
        setEnteredNumber(enteredNumber);
    }

    // empty the input text box
    function resetInputHandler() {
        setEnteredNumber('');
    }

    // check the entered number, so on
    // validate and so on
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            // show alert
            Alert.alert("Invalid number", "Number has to be a number between 1 and 99",[{text:'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={"number-pad"}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3a011e',
        borderRadius: 8,
        elevation: 4, // android shadow
        shadowColor: 'black', // ios shadow
        shadowOffset: { width: 0, height: 2 },  // ios shadow
        shadowRadius: 6,  // ios shadow
        shadowOpacity: 0.25,  // ios shadow
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 20,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});