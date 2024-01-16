import { View, Text, StyleSheet, Button } from "react-native";

function App() {
    return <>
        <View>
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: 'blue'
            }} />
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'skyblue'
            }} />
            <View style={{
                width: 150,
                height: 150,
                backgroundColor: 'red'
            }} />
            <View style={{
                height: 150,
                backgroundColor: 'yellow'
            }} />
        </View>
    </>
}



export default App;