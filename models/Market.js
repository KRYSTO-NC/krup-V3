const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MarketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  phone: {
    type: String,
    maxlength: [6, 'Phone number can not be longer than 6 characters'],
  },
  email: {
    type: String,
  },
  current: {
    type: Boolean,
    default: false,
  },
  periodicity: {
    type: String,
    enum: ['hebdomadaire', 'mensuel', 'annuel'],
    default: 'annuel',
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  openingHours: {
    from: { type: String },
    to: { type: String },
  },
})

// Geocode & create location field
MarketSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address)
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  }

  // Do not save address in DB
  this.address = undefined
  next()
})

module.exports = Market = mongoose.model('market', MarketSchema)
