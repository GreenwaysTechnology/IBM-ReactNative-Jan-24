import { StyleSheet, ScrollView, Text } from "react-native";

const App = () => {
    return <ScrollView style={page.container}>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>
        <Text style={page.text}>Hello</Text>

    </ScrollView>
}
export default App;

//Common style
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'pink'
    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})