import React, { Component } from 'react';
import UniqueEvent from './UniqueEvent.jsx';
class Events extends Component {
    

    render(){
        
        console.log('props in Events: ', this.props)
        let eventsList;
        if (!this.props.events.length) {
            eventsList = 'No events added'
        } else {
            eventsList = [];
            for (let i = 0; i < this.props.events.length; i++){
                eventsList.push(
                <UniqueEvent 
                    key={i}
                    event={this.props.events[i]} 
                    day={this.props.day}
                    deleteEvent={this.props.deleteEvent}

                />)
            }
        }


        return(


            <div>
                <div>{eventsList}</div>
                <button className='buttons' onClick={() => {this.props.openForm(`myFormDay${this.props.day}`)}}>Add Event</button>
                <form className='eventForm' style={{display: "none"}} id={`myFormDay${this.props.day}`} >
                    <label htmlFor="appt">Time: </label>
                        <input className='form' type="time" id={`timeInput${this.props.day}`} name="appt"></input>
                    
                    <label htmlFor="type">Type of event: </label>
                        <input className='form' type="text" name="type" id={`typeInput${this.props.day}`}></input>

                    <label htmlFor="place">Location: </label>
                        <input className='form' type='text' name='place' id={`placeInput${this.props.day}`}></input>
                    <input className='buttons' type='button' value='Submit' onClick={() => {this.props.addEvent(this.props.day, `timeInput${this.props.day}`, `typeInput${this.props.day}`, `placeInput${this.props.day}`)}}></input>
                    <button className="cancelButton" onClick={e => {this.props.closeForm(e, `myFormDay${this.props.day}`)}}>Cancel</button>
                </form>
            </div>
        )
    }
}




export default Events