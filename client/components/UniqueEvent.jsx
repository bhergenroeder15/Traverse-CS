import React, { Component } from 'react';



class UniqueEvent extends Component {

    render(){
        return (
            <div className='uniqueEvent'>
                <div className='eventDetails'>
                    <div>{this.props.event.time}</div>
                    <div>{this.props.event.type}</div>
                    <div>{this.props.event.place}</div>
                </div>
                
                <button className='buttons' onClick={() => {this.props.deleteEvent(this.props.day, this.props.event.time, this.props.event.type, this.props.event.place)}} >Delete Event</button>
            </div>
        )
    }
}

export default UniqueEvent