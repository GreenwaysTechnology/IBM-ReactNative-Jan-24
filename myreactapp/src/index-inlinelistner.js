import React from "react"
import ReactDOM from "react-dom/client"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        return <div>
            <h1>Review App</h1>
            <h3>Like {this.state.like}  Dislike  {this.state.dislike}</h3>
            <button onClick={() => {
                this.setState(previousState => ({ ...previousState, like: previousState.like + 1 }))
            }}>Like</button>
            <button onClick={() => {
                this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 }))
            }}>Dislike</button>
        </div>
    }
}

const App = () => {
    return <>
        <Review />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)