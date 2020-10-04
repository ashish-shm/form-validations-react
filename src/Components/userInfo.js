import React from 'react'
export default class UserInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            email : "",
            phone : "",
            bio : "",
        }
    }

    handleChange = () => {
        
    }

    render() {
        return (
            
<div className='userInfoForm'>
            <form>
                <input className='username' name='username' onChange={this.handleChange} placeholder='Enter username'></input>
                <input className='email' name='email' onChange={this.handleChange} placeholder='Enter email'></input>
                <input className='bio' name='bio' onChange={this.handleChange} placeholder='Enter bio'></input>
                <input className='phone' name='username' onChange={this.handleChange} placeholder='Enter username'></input>
                <input type='submit'></input>
            </form>
</div>
        )
    }
}