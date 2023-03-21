const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    }

})

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;