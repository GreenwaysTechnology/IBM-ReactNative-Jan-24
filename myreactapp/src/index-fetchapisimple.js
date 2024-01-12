import React from "react"
import ReactDOM from "react-dom/client"


class Posts extends React.Component {

    state = {
        posts: []
    }

    render() {
        return <div>
            <h1>Posts</h1>
            <ul>
                {this.state.posts.map(post => {
                    return <p>{post.title}</p>
                })}
            </ul>
        </div>
    }
    componentDidMount() {
        this.fetchPosts();
    }
    fetchPosts = async () => {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await postsResponse.json()
        console.log(posts)
        this.setState(previousState => {
            return Object.assign({}, previousState, { posts: previousState.posts.concat(posts) })
        })
    }
}

const App = () => {
    return <>
        <Posts />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)