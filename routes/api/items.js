const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);
// POST /api/items/:id/reviews
router.post('/:id/reviews', itemsCtrl.createReview);
// UPDATE /api/items/:id/reviews/:id
router.put('/:id/reviews/:reviewId', itemsCtrl.updateReview);
// DELETE /api/items/:id/reviews/:id
router.delete('/:id/reviews/:reviewId', itemsCtrl.deleteReview);

module.exports = router;