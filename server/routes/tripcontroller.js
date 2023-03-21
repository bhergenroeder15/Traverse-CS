const Trip = require('../db/tripmodel')

const tripController = {
  async getAllTrips(req,res,next) {
    try {
      const trips = await Trip.find({})
      await console.log(trips)
      res.locals.trips = trips;
      return next();
    } catch (err) {
      return next({log: 'Error in tripcontroller getAllTrips', status: 400})
    }
  }, 

  async createTrip(req, res, next) {
    try {
      const newTrip = await Trip.create({location: req.body.location, startDate: req.body.startDate, endDate: req.body.endDate});
      console.log(newTrip);
      return next()
    } catch(err) {
      return next({log: 'Error in tripcontroller createTrip', status: 400})
    }
  },

  async deleteTrip(req, res, next) {
    try {
      await console.log('req params: ', req.params)
      await console.log('req body: ', req.body)

      const deleted = await Trip.findOneAndDelete({location: req.body.location})
      console.log(deleted)
      await console.log('deleted')
      return next()
    } catch(err) {
      return next({log: 'Error in tripcontroller deleteTrip', status: 400})
    }
  }
}

module.exports = tripController;