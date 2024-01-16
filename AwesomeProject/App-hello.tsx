import { View, Text, StyleSheet } from "react-native";


function App() {
    return <>
        <View style={styles.container}>
            <Text style={styles.label}>Hello</Text>
            <Text style={{ color: 'blue' }}>How are you?</Text>
            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 25 }}>How is Your life</Text>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    },
    label: {
        color: 'red'
    }

})
console.log(styles)


export default App;