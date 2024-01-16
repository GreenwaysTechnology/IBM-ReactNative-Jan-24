import { View, Text, StyleSheet } from "react-native";
import type { PropsWithChildren } from 'react';

type ProfileType = PropsWithChildren<{
    id: number;
    name: string;
    status?: boolean
    address?: {
        city?: string
    }
}>;
const Profile = ({ id, name, status, address }: ProfileType) => {

    return <>
        <Text style={styles.label}>Profile details</Text>
        <Text style={styles.items}>
            {id}
        </Text>
        <Text style={styles.items}>
            {name}
        </Text>
        <Text style={styles.items}>
            {status ? 'Available' : 'Not Available'}
        </Text>
        <Text style={styles.items}>
            {status ? 'Available' : 'Not Available'}
        </Text>
        {/* In type script if  you access nested property, incase if that property is undefined or null, it causes runtie error, in order to avoid, ts provides a feature to convert undefined into empty string which is called non null handler ?.  */}
        <Text style={styles.items}>
            {address?.city}
        </Text>
    </>
}


function App() {
    return <>
        <View style={styles.container}>
            <Profile id={1} name={'Subramanian'} status={true} address={{ city: 'Coimbatre' }} />
            <Profile id={1} name={'Subramanian'} status={true} address={{ city: 'Coimbatre' }} />
            <Profile id={1} name={'Subramanian'} status={true} address={{ city: 'Coimbatre' }} />
            <Profile id={1} name={'Subramanian'} status={true} address={{ city: 'Coimbatre' }} />
            <Profile id={1} name={'Subramanian'} status={true} address={{ city: 'Coimbatre' }} />
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