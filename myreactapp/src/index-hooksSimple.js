import React, { useState } from "react"
import ReactDOM from "react-dom/client"

//Hooks.
class Counter_ extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return <>
            <h1>Counter {this.state.counter}</h1>
            <button onClick={() => {
                this.setState((state) => {
                    return { ...state, counter: state.counter + 1 }
                })
            }}>+</button>
        </>

    }
}

//functional component 
const Counter = props => {
    const [counter, setCounter] = useState(0)

    //listener
    const onIncrement = () => {
        // setCounter(state => {

        //     return state + 1
        // })
        // setCounter(state =>state + 1)
        setCounter(counter + 1)

    }

    return <>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            if (counter > 0) {
                setCounter(counter - 1)
            }
        }}>-</button>

    </>

}


const App = () => {
    return <Counter />
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)