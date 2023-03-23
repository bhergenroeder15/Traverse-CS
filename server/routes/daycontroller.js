const Day = require('../db/daymodel')
const dayController = {

    async getAllDays(req,res,next) {
        try {
          const days = await Day.find({})
          res.locals.days = days;
          return next();
        } catch (err) {
          return next({log: 'Error in dayController getAllDays', status: 400})
        }
      }, 

      async getOneDay(req,res,next) {
        try {
            const day = await Day.findOne({'date': req.params.date})
            res.locals.day = day
            return next();
        } catch(err) {
            return next({log: 'Error in dayController getOneDay', status: 400})
        }
      },

      async createDay(req, res, next) {
        try {
          const newDay = await Day.create({location: req.body.location, date: req.body.date});
          res.locals.day = newDay
          return next()
        } catch(err) {
          return next({log: 'Error in dayController createDay', status: 400})
        }
      },

      async deleteDay(req, res, next) {
        try {      
            console.log('deleteDay body: ', req.body)
            console.log(typeof req.body.date)
            const deleted = await Day.findOneAndDelete({"location": req.body.location, "date": req.body.date})
            console.log('delete this day: ', deleted)
            return next()
          } catch(err) {
            return next({log: `Error in daycontroller deleteDay: ${err}`, status: 400})
          }
      },

}


module.exports = dayController