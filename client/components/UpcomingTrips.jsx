import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


class UpcomingTrip extends Component {

    render(){

        return (
            <div>
                <div>{this.props.location}</div>
                <div>{this.props.startDate}</div>
                <div>{this.props.endDate}</div>
                <input type="submit" value="Delete" onClick={() => {this.props.deleteTrip(this.props.location, this.props.startDate, this.props.endDate)}}/>
            </div>
        )
    }
}

export default UpcomingTrip