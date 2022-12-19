const Item = require('../../models/item');

module.exports = {
  index,
  show,
  createReview
};

async function createReview(req, res) {
  try {
    req.body.user = req.user._id;
    const item = await Item.findById(req.params.id);
    item.reviews.push(req.body);
    res.json(item);
  } catch (err) {
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