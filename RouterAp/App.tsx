import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


//Create Drawer
const Drawer = createDrawerNavigator();

//screens

const Feed = () => <Text>Feed</Text>
const Article = () => <Text>Article</Text>

function App() {
    return <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    </NavigationContainer>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App
