const express = require('express');
const app = express()
const mongoose = require('mongoose')
const path = require('path');
const port = process.env.PORT || 3000
const tripController = require('./routes/tripcontroller')


mongoose.connect('mongodb://127.0.0.1:27017/traverse')
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())




if (process.env.NODE_ENV === 'production'){
    app.use('/build', express.static(path.join(__dirname, '../build')))
    app.use('/', (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../index.html'))
    });
}

const tripRouter = express.Router();


tripRouter.get('/', tripController.getAllTrips, 
(req, res) => res.status(200).json(res.locals.trips));

tripRouter.post('/', tripController.createTrip, 
(req, res) => res.status(200).send(res.locals.trips));

tripRouter.delete('/:_id', tripController.deleteTrip, 
(req, res) => res.status(200).send('router success'))

app.use('/trips', tripRouter)
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred'}
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message)
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;