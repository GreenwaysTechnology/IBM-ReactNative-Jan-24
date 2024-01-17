import { StyleSheet, View, Text, FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
//mock data 
import { Contact, contacts } from "./mock-data/users";

const App = () => {
    return <View style={page.container}>
        {/* <FlatList data={contacts} renderItem={(obj: ListRenderItemInfo<Contact>) => {
            return <Text style={page.text}>{obj.item.name}</Text>
        }} /> */}
        {/* <FlatList
            data={contacts}
            renderItem={({ item }) => {
                return <Text style={page.text}>{item.name}</Text>
            }}
        /> */}
        <FlatList
            data={contacts}
            renderItem={({ item: { name } }) => {
                return <Text style={[page.text, page.item]}>{name}</Text>
            }}
        />
    </View>
}
export default App;

//Common style
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'pink'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: 'blue'

    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})