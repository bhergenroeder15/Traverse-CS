const Trip = require('../db/tripmodel')

const tripController = {
  async getAllTrips(req,res,next) {
    try {
      const trips = await Trip.find({})
      res.locals.trips = trips;
      return next();
    } catch (err) {
      return next({log: 'Error in tripcontroller getAllTrips', status: 400})
    }
  }, 

  async createTrip(req, res, next) {
    if (Date.parse(req.body.startDate) > Date.parse(req.body.endDate)) {
      return next();
    };
    try {
      console.log(req.body.startDate, req.body.endDate)
      const newTrip = await Trip.create({location: req.body.location, startDate: req.body.startDate, endDate: req.body.endDate});
      console.log(newTrip)
      return next()
    } catch(err) {
      return next({log: 'Error in tripcontroller createTrip', status: 400})
    }
  },

  async deleteTrip(req, res, next) {
    try {      
      const deleted = await Trip.findByIdAndDelete(req.body.objectId)
      return next()
    } catch(err) {
      return next({log: 'Error in tripcontroller deleteTrip', status: 400})
    }
  },

  async addAccommodations(req, res, next){
    try{
      const matching = await Trip.findOne({_id: req.params._id})
      const newAccommodations = await Trip.findOneAndUpdate({_id: req.params._id}, {accommodations: req.body.update}, {new: true})
      res.locals.newAccommodations = newAccommodations
      return next()

    } catch(err){
      return next({log: 'Error in tripcontroller addAccommodations', status: 400})
    }
  }
}

module.exports = tripController;