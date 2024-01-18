import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

//create Stack Object
const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {
    const { navigation: { navigate } } = props
    const moveToProfile = () => {
        Alert.alert('Moving...')
        navigate('Profile', { id: 1, name: 'Subramanian', city: 'Coimbatore' })
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Text>
        <Button title="Profile" onPress={moveToProfile} />
    </View>
}

const ProfileScreen = (props) => {
    console.log(props.route.params)
    const { id, name, city } = props.route.params
    return <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
        {/* <Text>Id {props.route.params.id}</Text>
        <Text>Name {props.route.params.name}</Text>
        <Text>City {props.route.params.city}</Text> */}
        <Text>Id {id}</Text>
        <Text>Name {name}</Text>
        <Text>City {city}</Text>

    </View>

}
function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

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