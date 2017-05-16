let router = require('express').Router();
let passport = require('passport');
let mongoose = require('mongoose');
let Wishlist = mongoose.model('Wishlist');
let User = mongoose.model('User');
let auth = require('../auth');

router.post('/', auth.required, (req, res, next) => {
    User.findById(req.payload.id).then(user => {
        if (!user) { return res.sendStatus(401); }

        let wishlist = new Wishlist(req.body.wishlist);

        wishlist.author = user;

        return wishlist.save().then(() => {
            console.log(wishlist.author);
            return res.json({ wishlist: wishlist.toJSONFor(user) });
        });
    }).catch(next);
});

module.exports = router;
