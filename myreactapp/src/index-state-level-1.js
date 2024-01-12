import React from "react"
import ReactDOM from "react-dom/client"

//state mutation inside class component

class Review extends React.Component {

    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    //event handler : as an arrow function 
    onLike = () => {
        console.log('onLike')
        //increment 
        this.state.like++
        console.log(this.state.like)
        this.render()
    }
    render() {
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h3>Like {this.state.like}  Dislike  {this.state.dislike}</h3>
            <button onClick={this.onLike}>Like</button>
            <button>Dislike</button>
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