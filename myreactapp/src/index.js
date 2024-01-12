import React from "react"
import ReactDOM from "react-dom/client"


const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2>Loading....</h2>
    </>
}
const PostList = props => {
    return <div>
        {
            props.posts.map(post => {
                return <div key={post.id}>
                    <h2>{post.id}</h2>
                    <h6>{post.title}</h6>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>
}

class Posts extends React.Component {
    state = {
        isLoaded: false,//spinner status
        posts: [],
        error: null
    }

    render() {
        const { error, isLoaded, posts } = this.state
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <PostList posts={posts} />
        }
    }
    componentDidMount() {
        this.fetchPosts();
    }
    fetchPosts = async () => {
        try {
            const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await postsResponse.json()
            console.log(posts)
            //slow calls : todo: remove this setTimeout once if you understand the code:
            setTimeout(() => {
                this.setState(previousState => {
                    return Object.assign({}, previousState, { posts: previousState.posts.concat(posts), isLoaded: true })
                })
            }, 5000)

        }
        catch (err) {
            this.setState(previousState => {
                return {
                    ...previousState, isLoaded: true, error: "something went"
                }
            })
        }
    }
}

const App = () => {
    return <>
        <Posts />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)