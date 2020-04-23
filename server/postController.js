module.exports = {
    getPosts: async (req, res) =>{
        const db = req.app.get('db')
        const {search, userPosts} = req.query
        const {user_id} = req.params
        const posts = await db.get_all_posts()

        if(userPosts == true && search){
            const allPosts = posts.filter((post) => {
                return post.title.includes(search)
            })
            console.log(allPosts)
           return res.status(200).send(allPosts)
        }

        if(userPosts == false && search){
            const allPosts = posts.filter((post) => {
                if(post.title.includes(search) && user_id != posts.author_id){
                    return post
                }
            })
            return res.status(200).send(allPosts)
        }

        if(userPosts == false){
            const allPosts = posts.filter((post) => {
                if(user_id != posts.author_id){
                    return post
                }
            })
            return res.status(200).send(allPosts)
        }

        res.status(200).send(posts)
        console.log(posts)
        
    }
}