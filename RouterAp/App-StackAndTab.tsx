import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//create Stack Object
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = props => {
    return <Tab.Navigator>
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
}
const Messages = props => {
    const { navigation } = props;
    return <View style={styles.container}>
        <Text>Messages Screen</Text>
        <Button title="go to Settions" onPress={() => {
            navigation.navigate('Settings')
        }} />
    </View>
}

const Feed = props => {
    return <View style={styles.container}>
        <Text>Feed Screen</Text>
    </View>
}
const Settings = props => {
    return <View style={styles.container}>
        <Text>Settings Screen</Text>
    </View>
}

function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})