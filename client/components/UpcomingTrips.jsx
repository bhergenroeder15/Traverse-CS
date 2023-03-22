import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


class UpcomingTrip extends Component {
    render(){
        return (
            <div onClick={() => {this.props.expandTrip(`trip${this.props.id}`)}}>
                <div>{this.props.location}</div>
                <div>{this.props.startDate}</div>
                <div>{this.props.endDate}</div>
                <input type="submit" value="Delete" onClick={() => {this.props.deleteTrip(this.props.objectId)}}/>
                
                <div id={`trip${this.props.id}`} style={{display:"none"}}>Hide</div>
            </div>
        )
    }
}

export default UpcomingTrip