import { Button, Text, View } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

//Steps :1 Write reducer : pure function returns immutable object.

const CounterReduer = (initalState = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return { ...initalState, counter: initalState.counter + 1 }
        default:
            return initalState
    }
}

//Step 2 : Create Store Object.
const store = configureStore({
    reducer: {
        //list of reducers
        counter: CounterReduer
    }
});


//Step 3:Read State from Component which recieves state from Redux and also send action(request for muation)

const Counter = () => {
    //grab redux state via hook: useSelector
    const value = useSelector(state => {
        //appState.reducerName
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //invoke reducer: by sending action object 
        dispatch({ type: 'counter/increment' })
    }
    return <>
        <Text>Counter App</Text>
        <Text>Value : {value.counter}</Text>
        <Button title="Increment" onPress={onIncrement} />

    </>
}


function App() {

    // Step 4: Provider is component which binds react with redux by sending store object
    return <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Counter></Counter>
        </View>
    </Provider>
}

export default App;