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
      async addEvent(req, res, next) {
        try{
         
          const newEvent = await Day.findOneAndUpdate({date: req.params.day}, {$push: {events: {time: req.body.time, type: req.body.type, place: req.body.place}}}, {new: true})
          console.log(newEvent)
          return next()
        } catch (err) {
          return next({log: 'Error in dayController addEvent', status: 400})
        }
      },

      async deleteEvent(req, res, next) {
        try{
          console.log(req.params)
          console.log(req.body)
          const updatedEvent = await Day.findOneAndUpdate({date: req.params.day}, {$pull: {events: req.body}}, {new: true})
          console.log(updatedEvent)
          return next()
        } catch(err) {
          return next({log: 'Error in dayController deleteEvent', status: 400})
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