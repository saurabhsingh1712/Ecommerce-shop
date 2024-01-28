const express = require('express');
const { isLoggedIn } = require('../middleware');
const User = require('../models/User');
const Product = require('../models/product');
const router = express.Router();

router.post('/user/:productId/add', isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId);
  console.log(user, 'tom');
  let product = await Product.findById(productId);
  user.wishlist.push(product);
  await user.save();
  res.redirect('/user/wishlist');
});

module.exports = router;
