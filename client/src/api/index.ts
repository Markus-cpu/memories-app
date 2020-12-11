import { Post } from './../redux/interfaces/Post'
import axios from 'axios'

const url: string = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost: Post[]) => axios.post(url, newPost)