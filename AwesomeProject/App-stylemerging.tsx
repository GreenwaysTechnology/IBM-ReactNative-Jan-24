
import { StyleSheet, View, Text } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={[styles.box,
        { backgroundColor: 'pink' }]
        } />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        height: 100,
        width: 100
    }

})