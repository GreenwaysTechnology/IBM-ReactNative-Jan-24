import { View } from "react-native";

const App = () => {
    return <View style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}>
        {/* Child elements */}
        <View style={{ height: '15%', backgroundColor: 'red' }} />
        <View style={{ height: '35%', width: '66%', backgroundColor: 'skyblue' }} />
        <View style={{ height: '50%', width: '33%', backgroundColor: 'steelblue' }} />
    </View>
}
export default App;