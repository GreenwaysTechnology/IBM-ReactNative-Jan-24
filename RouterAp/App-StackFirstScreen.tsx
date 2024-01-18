import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

//create Stack Object
const Stack = createNativeStackNavigator();

const Home = () => <View style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Text>
</View>

// function App() {
//     return <View style={styles.container}>
//         <Home />
//     </View>
// }

function App() {
    // What ever navigation(stack or tab or drawer),NavigationContainer Must be top level compoent.
    return <NavigationContainer>
        {/* Stack Navigation */}
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}


export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})