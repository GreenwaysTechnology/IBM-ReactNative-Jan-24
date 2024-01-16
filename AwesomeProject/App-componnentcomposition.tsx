import { View, Text, StyleSheet, Button } from "react-native";
import { Review } from "./components/reviews/review";

function App() {
    return <>
        <View style={styles.container}>
            <Review />
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    },
    label: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    items: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left'
    }

})


export default App;