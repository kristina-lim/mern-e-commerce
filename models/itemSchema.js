const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    enum: ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'],
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: { type: String },
}, {
  timestamps: true
});

const itemSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  emoji: [{ 
    type: String 
  }],
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
  },
  price: { 
    type: Number, 
    required: true 
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = itemSchema;