import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DayDetails from './DayDetails.jsx';

class TripDetails extends Component {
    render(){
        const daysOfTrip = [];
        const startDate = Date.parse(this.props.startDate);
        const endDate = Date.parse(this.props.endDate)
        for (let i = new Date(startDate); i <= endDate; i.setDate(i.getDate()+1)){
            daysOfTrip.push(<DayDetails 
                key={`key${i}`} 
                days={this.props.days} 
                day={i.toDateString()} 
                location={this.props.location}
                openForm={this.props.openForm}
                closeForm={this.props.closeForm}
                addEvent={this.props.addEvent}
                deleteEvent={this.props.deleteEvent}

                />)
        }
        
        return(
            <div className='tripDetails'>
                <div className='accommodationsWrapper'>
                    <div className='accommodations'>
                        <div>Accommodations: {' '}</div>
                        <div id={`accommodationsTrip${this.props.objectId}`}>{' '}{this.props.accommodations}</div>
                    </div>
                    <button type='submit' className='buttons' onClick={()=>{this.props.addAccommodations(this.props.objectId)}}>Add/Edit Accommodations</button>
                </div>
                

                <div className='dayList'>{daysOfTrip}</div>
            </div>
        )
    }
    
    


}





export default TripDetails