const Item = require('../../models/item');

module.exports = {
  index,
  show,
  createReview,
  updateReview,
  deleteReview
};

async function deleteReview(req, res) {
  const item = await Item.findById(req.params.id);
  const reviewDelete = item.reviews.id(req.params.reviewId);
  const indexReview = item.reviews.indexOf(reviewDelete);
  item.reviews.splice(indexReview, 1);
  await item.save();
  res.json(item);
}

async function updateReview(req, res) {
  try {
    const tempItem = await Item.findById(req.params.id);
    const review = tempItem.reviews.id(req.params.reviewId);
    review.content = req.body.content;
    await tempItem.save();
    const allItems = await Item.find({});
    res.json(allItems);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function createReview(req, res) {
  try {
    req.body.user = req.user._id;
    const item = await Item.findById(req.params.id);
    item.reviews.push(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}