import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UpcomingTrip from './components/UpcomingTrips.jsx';


class App extends Component {
    constructor() {
        super();
        this.state = {
            trips: [],
        }

        this.addItinerary = this.addItinerary.bind(this);
        this.deleteTrip = this.deleteTrip.bind(this);
        this.expandTrip = this.expandTrip.bind(this)
    }
    addItinerary(){
        const destination = document.getElementById('addDestination').value;
        const startDate = document.getElementById('addStartDate').value
        const endDate = document.getElementById('addEndDate').value
        fetch('/trips', {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({location: destination, startDate: startDate, endDate: endDate})
        })
        .then((response) => {
            console.log('added')
        })
    }   

    deleteTrip(objectId){
        fetch(`/trips/${objectId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({objectId: objectId})
        })
        .then((response) => {
            console.log('delete fetch successful')
        })
        .then(window.location.reload())
    }

    expandTrip(id){
        let x = document.getElementById(id);
        if (x.style.display === 'block'){
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }


    componentDidMount(){
            fetch('/trips')
            .then(res => res.json())
            .then((trips) => {
                if (!Array.isArray(trips)) trips = [];
                return this.setState({trips})
            })
            .catch(err => console.log('Fetch request in App.jsx api fetch: ', err))
    }

    // componentDidUpdate(){
    //     fetch('/trips/')
    //         .then(res => res.json())
    //         .then((trips) => {
    //             console.log('fetch response: ', trips)
    //             if (!Array.isArray(trips)) trips = [];
    //             return this.setState({trips})
    //         })
    //         .catch(err => console.log('Fetch request in App.jsx api fetch: ', err))
    // }
    render () {

        const trips = [];
        for (let i = 0; i < this.state.trips.length; i++){
            trips.push(
                <UpcomingTrip 
                id={i} 
                objectId={this.state.trips[i]._id}
                location={this.state.trips[i].location} 
                startDate={ new Date(this.state.trips[i].startDate).toDateString()} 
                endDate={new Date(this.state.trips[i].endDate).toDateString()} 
                expandTrip={this.expandTrip} 
                deleteTrip={this.deleteTrip}
                />)

        }
        
        return (
            <div className='router'>
                <h1>Traverse</h1>
                <div>Your upcoming trips:</div>
                <div>{trips}</div>
                <div>Add Itinerary:</div>
                <form className='form'>
                <div className="form">
                    <label htmlFor="location">Destination: </label>
                    <input type="text" name="location" id="addDestination"/>
                </div>
                <div className="form">
                    <label htmlFor="startDate">Start date: </label>
                    <input type="date" name="startDate"  id="addStartDate"/>
                </div>
                <div className="form">
                    <label htmlFor="endDate">End date: </label>
                    <input type="date" name="endDate"  id="addEndDate"/>
                </div>
                <div className="form">
                    <input type="submit" value="Submit" onClick={this.addItinerary}/>
                </div>
                </form>

            
            
            </div>
            


        )
    }

}

export default App;