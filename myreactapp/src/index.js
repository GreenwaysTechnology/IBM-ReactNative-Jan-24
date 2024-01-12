import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const Review = props => {

    const [review, setReview] = useState({ like: 0, dislike: 0 })

    //listener
    const onLike = () => {
        // setReview(review => {
        //     //immutable object 
        //     return { ...review, like: review.like + 1 }
        // })
        setReview({ ...review, like: review.like + 1 })
    }


    return <div>
        <h1>Review Application</h1>
        <h1>Like {review.like} Dislike {review.dislike}</h1>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
            setReview(review => {
                //immutable object 
                return { ...review, dislike: review.dislike + 1 }
            })
        }}>Dislike</button>

    </div>

}


const App = () => {
    return <Review />
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)