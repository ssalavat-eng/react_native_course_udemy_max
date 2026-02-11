import {Text, StyleSheet, View} from 'react-native';
import {GlobalStyles} from "../../constants/styles";


function ErrorOverlay({ message }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.errorText, styles.title]}>An error occurred!</Text>
            <Text style={styles.errorText}>{message}</Text>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});