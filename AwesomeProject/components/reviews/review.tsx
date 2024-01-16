import { View, Text, StyleSheet, Button } from "react-native";
import { useState, type PropsWithChildren } from 'react';

export const Review = () => {
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
const styles = StyleSheet.create({
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