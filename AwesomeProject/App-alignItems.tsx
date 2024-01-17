import { StyleSheet, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        flexDirection: 'row',
        //flexDirection: 'column-reverse',
        // flexDirection: 'row-reverse',
        //alignIte:ms: 'stretch',
        //alignItems: "flex-start",
        // alignItems: "flex-end",
        alignItems: "center",
        backgroundColor: 'pink'
    }
})