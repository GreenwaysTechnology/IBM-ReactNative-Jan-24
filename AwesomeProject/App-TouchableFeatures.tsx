import { StyleSheet, View, Text, FlatList, ActivityIndicator, Alert, TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";

const Error = props => {
    return <>
        <Text>{props.error}</Text>
    </>
}

const Spinner = props => {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color="#0000ff" />
    </View>
}



const Posts = props => {
    let initalState = {
        isLoaded: false,
        items: [],
        error: null
    }
    const [posts, setPosts] = useState(initalState)

    const onSelect = item => {
        Alert.alert(JSON.stringify(item))
    }

    async function fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const values = await (await fetch(url)).json()
            setPosts({ ...posts, isLoaded: true, items: posts.items.concat(values) })
        }
        catch (err) {
            setPosts({ ...posts, isLoaded: true, error: err })
        }
    }
    //useEffect : ComponentDidMount 
    useEffect(() => {
        setTimeout(() => {
            fetchPosts()
        }, 5000)
    }, [])

    const { error, isLoaded, items } = posts
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4} underlayColor='yellow' onPress={() => { onSelect(item) }} >
                    <View>
                        <Text style={page.item}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}
        />
    }

}
const App = () => {
    return <View style={page.container}>
        <Text style={page.text}>Posts</Text>
        <Posts />
    </View>
}
export default App;

//Common style
const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'pink'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: '#000'

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }

})