import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const UserName = props => {
    const [text, onSetName] = useState('Your Name')
    const onUpdate = () => {
        console.log('Your Name is', text)
        Alert.alert(`Your Name is ${text}`)
        onSetName('')
    }
    return <View>
        <TextInput style={page.input} onChangeText={onSetName} value={text}
        />
        <Button onPress={onUpdate} title="Get Input" />
    </View>
}
const App = () => {

    return <View style={page.container}>
        <UserName />
    </View>
}
export default App;

//Common style
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'pink'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})