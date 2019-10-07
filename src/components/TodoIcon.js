import React, { Component } from 'react'
import './TodoIcon.css'

export default class TodoIcon extends Component {
    
    



    render() {

      

        return (
            <>
            <button onClick={this.handleIcon} className="icon-wrapper" role="img" aria-label="emoji">{ this.props.value }</button>
            </>
        )
    }
}
