export interface Post {
    title: string
    message: string
    creator: string
    tags: string[]
    selectedFile: string
    likeCount: {
        type: number
        default: number
    },
    createdAt: {
        type: Date
        default: Date
    }
}