import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            posts: [],
            search: '',
            userPosts: true
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/user_id?search=${this.state.search}&userPosts=${this.state.userPosts}`).then(res =>{
            this.setState({
                posts: res.data
            })
        })
    }

    resetSearch(){}

    render(){
        const mappedPost = this.state.posts.map(post => {
            return <div>
                pst
                {this.state.post}
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

const mapStateToProps = state => {
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps)(Dashboard)