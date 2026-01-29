import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: '#ccc', foreground: true}}
                style={( {pressed} ) => [styles.button, pressed ? styles.buttonPressed : null ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        width: 150,
        height: 150,
        borderRadius: 8,
        elevation: 4, // shadow Android
        // shadow iOS
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
    },
    button: {
       flex: 1,
    },
    buttonPressed: { // iOS ripple effect
       opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title:  {
        fontWeight: "bold",
        fontSize: 18,
    }
});