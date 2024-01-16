import { StyleSheet, View, Text } from "react-native";

// const App = () => {
//     return <View style={styles.container}>
//         <View style={{ flex: 1, backgroundColor: 'red' }} />
//         <View style={{ flex: 2, backgroundColor: 'yellow' }} />
//         <View style={{ flex: 3, backgroundColor: 'blue' }} />
//         <View style={{ flex: 4, backgroundColor: 'skyblue' }} />
//         <View style={{ flex: 5, backgroundColor: 'yellow' }} />
//     </View>
// }
const App = () => {
    return <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        <View style={{ flex: 2, backgroundColor: 'blue' }} />
        <View style={{ flex: 3, backgroundColor: 'green' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }} />
            <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        </View>
        {/* <View style={{ flex: 5, backgroundColor: 'white' }}>
            <Text>Hello</Text>
        </View> */}
    </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1
    }
})
export default App;
