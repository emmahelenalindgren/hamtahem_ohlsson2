var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var bookingSchema = new Schema({
    chosenDate: String,
    //carId: ObjectId,
    booked: Boolean
})

module.exports = mongoose.model('customer', bookingSchema); 