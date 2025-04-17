import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingById() {

  const [posts, setPosts] = useState({}) // [] empty array , {} empty object
  const [id, setId] = useState(1)  // here one is default value 
  const [idFromButtonClick,setIdFromButtonClick] = useState(1)
  const handleClick = () =>{
    setIdFromButtonClick(id)
  }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick]) // [] because of this data will fetch only once  id will play dynamic role here

    return (
        <div>
            <div>
                <input type='text' value={id} onChange={e=> setId(e.target.value)} />
            </div>
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{posts.id} : {posts.title}</div>
            {/* <ul>
                {
                    posts.map(post => (<li key={post.id}>{post.id} : {post.title}</li>))
                }
            </ul> */}
        </div>
    )
}

export default DataFetchingById