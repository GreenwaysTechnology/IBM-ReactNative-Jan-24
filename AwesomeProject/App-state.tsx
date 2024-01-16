import { View, Text, StyleSheet, Button } from "react-native";
import { useState, type PropsWithChildren } from 'react';

const Review = () => {
    const [like, setLike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }

    return <>
        <View>
            <Text style={styles.label}>Review Component</Text>
            <Text style={styles.items}>Like {like}</Text>
            <Button title="Like" onPress={onLike} />
        </View>
    </>
}

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