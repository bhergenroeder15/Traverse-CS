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
      const newTrip = await Trip.create({location: req.body.location, startDate: req.body.startDate, endDate: req.body.endDate});
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
  }
}

module.exports = tripController;