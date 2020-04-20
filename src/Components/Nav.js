import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    constructor(){
        super()

        
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.username}</h1>
                <br/>
                <img src={this.props.profile_pic} alt='profile picture'/>
                <br/>
                 <Link to='/dashboard'>Home</Link>
                 <br/>
                 <Link to='/new'>New Post</Link>
                <br/>
                 <Link to='/'>Logout</Link>
                 <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
return {
    username: state.username,
    profile_pic: state.profile_pic
}
}


export default connect(mapStateToProps)(Nav)