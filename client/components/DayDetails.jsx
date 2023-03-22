import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class DayDetails extends Component {
    render(){
        return(
            <div>{this.props.day}</div>
        )
    }
}


export default DayDetails