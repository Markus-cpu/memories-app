const reducer = (posts: Array<string | number>, action: any) => {
    if(action.type === 'CREATE') {
        switch (action.type) {
            case 'FETCH_ALL':
                return action.payload
            case 'CREATE':
                return [...posts, action.payload]
            default:
                return posts
        }
    }
}

export default reducer