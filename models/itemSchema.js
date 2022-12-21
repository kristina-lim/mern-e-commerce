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
}, {
  timestamps: true
});


// reviewSchema.statics.changeContent = function(reviewId) {
//   return this.findOneAndUpdate(filter, update,
//     { review: reviewId, content: ''},
//     { review: reviewId },
//     { upsert: true, new: true }
//   );
// };

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