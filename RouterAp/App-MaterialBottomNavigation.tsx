import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const FeedScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FeedScreen</Text>
    </View>
}
const NotificationsScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NotificationsScreen</Text>
    </View>
}
const ProfileScreen = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen</Text>
    </View>
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Notification" component={NotificationsScreen} />
            <Tab.Screen name="Profiles" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


function App() {
    return <SafeAreaProvider>
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    </SafeAreaProvider>
}

export default App;