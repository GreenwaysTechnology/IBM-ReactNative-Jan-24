
import { StyleSheet, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={{
            alignSelf: "center",
            width: 'auto',
            minWidth: 50,
            height: 50,
            // width: 50,
            backgroundColor: 'red',
        }}

        />
        <View style={{
            backgroundColor: 'skyblue', alignSelf: 'center', height: 50,
            width: 50
        }} />
        <View style={{
            height: 50,
            width: 50, backgroundColor: 'steelblue', alignSelf: 'flex-end'
        }} />

    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        height: 60,
    }
})