import { StyleSheet, View, Text } from "react-native";

const App = () => {
    return <View style={container}>
        <Text style={text}>Hello</Text>
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
    text: {
        fontSize: 30,
        color: '#000'
    }

})
//lists Style 
const lists = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#61dafb',
    },
    listItem: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})

//merge two styles 
const container = StyleSheet.compose(page.container, lists.listContainer)
const text = StyleSheet.compose(page.text, lists.listItem)