import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './Events.jsx'
class DayDetails extends Component {

    


    render(){
        const stateDay = this.props.days.filter(day => day.date === this.props.day)   
        const events = []
        events.push(<Events key='1' events={stateDay[0].events}/>)
        return(
            <div>
                <div>{this.props.day}</div>
                <div>Events: 
                    <div>{events}</div>
                </div>
                
               
            </div>
            
        )
    }
}


export default DayDetails