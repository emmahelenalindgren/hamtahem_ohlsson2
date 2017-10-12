var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var fordonSchema = new Schema({
    fordonstyp: String,
    requiredDrivingLicense: String,
    brand: String,
    gearbox: String,
    model: String,
    year: Number,
    dagshyra: Number,
    fuel: String,
    imgLink: String,
     kommentarer: {
                skador: String
            },
    bookedDate: String
})
module.exports = mongoose.model('cars', fordonSchema);