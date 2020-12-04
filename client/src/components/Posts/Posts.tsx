import React from 'react'
import {DefaultRootState, useSelector} from 'react-redux'

import Post from "./Post/Post";
import useStyles from './style'

const Posts: React.FC = () => {
    const classes = useStyles()
    const posts = useSelector((state: DefaultRootState) = > state.posts)
    return (
        <div>
            <h1>Posts</h1>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts