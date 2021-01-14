let mongoose = require('mongoose');

let uniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-email');

let crypto = require('crypto');
let jwt = require('jsonwebtoken');
let secret = require('../config').secret;

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, "is invalid"],
        index: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        index: true
    },
    name: String,
    image: String,
    birthday: Date,
    hash: String,
    salt: String
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: "is already taken."});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT()
    };
};

UserSchema.methods.toProfileJSONFor = function (user) {
    return {
        name: this.name,
        username: this.username,
        image: this.image || "https://res.cloudinary.com/closebrace/image/upload/w_400/v1491315007/usericon_id76rb.png",
        following: false
    }
};

mongoose.model('User', UserSchema);
