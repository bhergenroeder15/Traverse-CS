import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './Events.jsx'
class DayDetails extends Component {

    

    
    render(){
        const stateDay = this.props.days.filter(day => day.date === this.props.day)   
        const events = []
        if (stateDay.length) events.push(
        <Events 
            key='1' day={this.props.day} 
            events={stateDay[0].events}
            openForm={this.props.openForm}
            closeForm={this.props.closeForm}
            addEvent={this.props.addEvent}
            deleteEvent={this.props.deleteEvent}

            />)
        return(
            <div className='dayThumbnail'>
                <div className='dayHeader'>{this.props.day}</div>
                <div>
                    <div className='eventsHeader'>Events:</div> 
                    <div className='eventsList'>{events}</div>
                </div>
                
               
            </div>
            
        )
    }
}


export default DayDetails