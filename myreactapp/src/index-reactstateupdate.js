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
        // this.setState(previousState => {
        //     //write immutable logic 
        //     // return {
        //     //     like: previousState.like + 1,
        //     //     dislike: previousState.dislike
        //     // }
        //     // return Object.assign({}, previousState, { like: previousState.like + 1 })
        //     return { ...previousState, like: previousState.like + 1 }
        // })

        this.setState(previousState => ({ ...previousState, like: previousState.like + 1 }))
    }

    onDislike = ()=>{
        this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 }))
    }
    render() {
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h3>Like {this.state.like}  Dislike  {this.state.dislike}</h3>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>
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