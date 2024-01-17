import { StyleSheet, View, Text, SectionList } from "react-native";
import { courses } from "./mock-data/courses";

const App = () => {
    return <View style={page.container}>
        <Text style={[page.text, { textAlign: 'center' }]}>Courses</Text>
        <SectionList
            sections={courses}
            renderItem={({ item }) => {
                return <Text style={[page.text, { backgroundColor: 'yellow' }]}>{item}</Text>
            }}
            keyExtractor={(item, index) => {
                return item + index
            }}
            renderSectionHeader={({ section: { title } }) => {
                return <Text style={page.text}>{title}</Text>
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
        backgroundColor: 'pink'
    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})


