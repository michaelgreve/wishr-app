const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const auth = require('../auth');

router.param('username', (req, res, next, username) => {
    User.findOne({username: username}).then(user => {
        if (!user) { return res.sendStatus(404); }

        req.profile = user;

        return next();
    }).catch(next);
});

router.get('/:username', auth.optional, (req, res) => {
    if (req.payload) {
        User.findById(req.payload.id).then(user => {
            console.info('payload.id', req.payload.id);
            if (!user) { return res.json({ profile: req.profile.toProfileJSONFor(false) }); }

            return res.json({ profile: req.profile.toProfileJSONFor(user) });
        });
    } else {
        return res.json({ profile: req.profile.toProfileJSONFor(false) });
    }
});

module.exports = router;
