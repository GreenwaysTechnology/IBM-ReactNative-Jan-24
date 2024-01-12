import React from "react"
import ReactDOM from "react-dom/client"

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    //biz 
    onLike = () => {
        this.setState(previousState => this.setState(previousState => ({ ...previousState, like: previousState.like + 1 })))
    }
    onDislike = () => {
        this.setState(previousState => this.setState(previousState => ({ ...previousState, dislike: previousState.dislike + 1 })))
    }
    render() {
        return <div>
            <h1>Review App</h1>
            {/* State as prop and function as prop */}
            <ReviewDisplay {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
        </div>
    }
}
//child component which displays state 
const ReviewDisplay = props => {
    return <>
        <h1>Like {props.like} Dislike {props.dislike}</h1>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDislike}>Dislike</button>

    </>
}

const App = () => {
    return <>
        <Review />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)