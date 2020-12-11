

type LikeCountType = {
    type: number
    default: 0
}
type CreateAtType = {
    type: Date
    default: Date
}

export type Post = {
    title: string
    message: string
    creator: string
    tags: string
    selectedFile: string
    likeCount: LikeCountType
    createdAt: CreateAtType
}