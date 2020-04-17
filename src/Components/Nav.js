import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                 <Link to='/dashboard'>Home</Link>
                 <br/>
                 <Link to='/new'>New Post</Link>
                <br/>
                 <Link to='/'>Logout</Link>
                 <br/>
                Nav.js
            </div>
        )
    }
}

export default Nav