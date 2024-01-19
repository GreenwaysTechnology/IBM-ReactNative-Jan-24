import { NativeModules, Button, View } from "react-native";

const { CalendarModule } = NativeModules;

function App() {

    const onSubmit = async () => {
        // console.log(modules)
        const message = await CalendarModule.createCalendarEvent('learn react native', 'IBM')
        console.log(message)
    }
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="CreateEvent" onPress={onSubmit} />
    </View>
}

export default App;