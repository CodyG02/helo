import React, {Component} from 'react'

class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            posts: [],
            search: '',
            userPosts: true
        }
    }

    getAllPosts(){}

    resetSearch(){}

    render(){
        const mappedPost = this.state.posts.map(post => {
            return <div>
                {this.state.posts}
                </div>
        })
            return(
                <div>
                <input placeholder='search'/>
                <button>search</button>
                <button>reset</button>
                <input type='checkbox'/>
                <br/>
                Dashboard.js
                    {mappedPost}
                </div>
                )
            }
}

export default Dashboard