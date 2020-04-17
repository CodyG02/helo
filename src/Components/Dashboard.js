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
        return(
            <div>Dashboard.js</div>
        )
    }
}

export default Dashboard