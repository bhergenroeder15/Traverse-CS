import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TripDetails from './TripDetails.jsx';

class UpcomingTrip extends Component {
    render(){
        return (
            <div>
                <div>{this.props.location}</div>
                <div>{this.props.startDate}</div>
                <div>{this.props.endDate}</div>
                <input type="submit" value="Delete" onClick={() => {this.props.deleteTrip(this.props.objectId)}}/>
                
                <div id={`trip${this.props.id}`} 
                style={{display:"none"}}
                ><TripDetails 
                    objectId={this.props.objectId} 
                    startDate={this.props.startDate} 
                    endDate={this.props.endDate} 
                    accommodations={this.props.accommodations}
                    addAccommodations={this.props.addAccommodations}

                /></div>
                <button onClick={() => {this.props.expandTrip(`trip${this.props.id}`)}}>Expand/Collapse details</button>
            </div>
        )
    }
}

export default UpcomingTrip