var mongoose = require('mongoose')

var Schema = mongoose.Schema

var FeatureSchema = new Schema({
  type: {
    type: String,
    required: [true, 'I simply MUST know'],
    default: 'Feature'
  },
  geometry: {
    type: {
      type: String,
      required: true,
      default: 'Point'
    },
    coordinates: {
      type: [
        Number
      ],
      default: [616683.03, 6350752.74]
    }
  },
  properties: {
    name: {
      type: String,
      default: 'Dagmarsgade 17 <3',
      required: true,
      max: [12, 'Too long man..']
    }
  },
  updated: {
    type: Date,
    default: Date.now()
  }
})

// Virtual for features coordinates
FeatureSchema
  .virtual('coordinates')
  .get(function () {
    return this.geometry.coordinates
  })

// Virtual for features's URL
FeatureSchema
  .virtual('url')
  .get(function () {
    return '/map/feature/' + this._id
  })

// Export model
module.exports = mongoose.model('Feature', FeatureSchema)
