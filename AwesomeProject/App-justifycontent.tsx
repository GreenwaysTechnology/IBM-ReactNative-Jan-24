//justify content

import { StyleSheet, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        flexDirection: "row",
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
        //justifyContent: "space-around",
        //justifyContent: "space-between",
        //justifyContent: "space-evenly",
        //justifyContent: "center",
        backgroundColor: 'pink'
    }
})