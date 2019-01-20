var mongoose = require('mongoose')

var Schema = mongoose.Schema

var FeatureSchema = new Schema({
  type: {
    type: String,
    required: true,
    default: 'Feature'
  },
  geometry: {
    type: {
      type: String,
      required: true,
      default: 'Point'
    },
    coordinates: [125.6, 10.1]
  },
  properties: {
    name: {
      type: String,
      default: 'Dagmarsgade 17 <3',
      required: true,
      max: 100
    }
  },
  updated: {
    type: Date,
    default: Date.now()
  }
})

// Virtual for author's full name
FeatureSchema
  .virtual('name')
  .get(function () {
    return this.family_name + ', ' + this.first_name
  })

// Virtual for author's lifespan
FeatureSchema
  .virtual('lifespan')
  .get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
  })

// Virtual for author's URL
FeatureSchema
  .virtual('url')
  .get(function () {
    return '/catalog/author/' + this._id
  })

//Export model
module.exports = mongoose.model('Author', FeatureSchema)
