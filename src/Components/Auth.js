import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../ducks/reducer'

class Auth extends Component {
    constructor(){
        super()

        this.state={
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const body ={
            username: this.state.username,
            password: this.state.password
        }

        axios.post('/api/auth/login', body).then(res => {
            updateUser(res.data)
            this.props.history.push('/dashboard')
        }).catch((err) => alert('could not log in'))
    }

    register = () => {
        const body = {
            username: this.state.username,
            password: this.state.password
        }

    axios.post('/api/auth/register', body).then(res => {
        updateUser(res.data)
        this.props.history.push('/dashboard')
    }).catch((err) => alert('could not register'))
    }

    render(){
        return(
            <div>
                Auth.js
                <input name='username' placeholder="username" onChange={(e) => {this.handleChange(e)}} />
                <input name='password' placeholder='password' onChange={(e) => {this.handleChange(e)}}/>
                <button onClick={() => {this.login()}} >login</button>
            <button onClick={() => {this.register()}} >register</button>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth)