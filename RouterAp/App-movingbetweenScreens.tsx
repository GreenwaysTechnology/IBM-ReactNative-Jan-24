import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

//create Stack Object
const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {
    //console.log(props)
    const { navigation: { navigate } } = props
    const moveToProfile = () => {
        Alert.alert('Moving...')
        //props.navigation.navigate('Profile')
        navigate('Profile')
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Text>
        <Button title="Profile" onPress={moveToProfile} />
    </View>
}

const ProfileScreen = () => <View style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
</View>

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