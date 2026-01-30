import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from "../MealDetails";

function MealItem ({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectMealHandler () {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc', foreground: true}}
                style={( {pressed} ) => pressed ? styles.buttonPressed : null}
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>);
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4, // shadow Android
        // shadow iOS
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
    },
    innerContainer: { // for iOS to have round corners
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonPressed: { // iOS ripple effect
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});