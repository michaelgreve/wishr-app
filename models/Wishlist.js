let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let slug = require('slug');

let WishlistSchema = mongoose.Schema({
    slug: { type: String, lowercase: true, unique: true },
    title: { type: String, required: [true, "can't be blank"] },
    published: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
}, { timestamps: true });

WishlistSchema.plugin(uniqueValidator, { message: "is already taken" });

WishlistSchema.methods.slugify = function () {
    this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

WishlistSchema.pre('validate', function(next) {
    this.slugify();

    next();
});


WishlistSchema.methods.toJSONFor = function (user) {
    return {
        slug: this.slug,
        title: this.title,
        published: this.published,
        author: this.author.toProfileJSONFor(user),
        items: this.items
    };
};

mongoose.model('Wishlist', WishlistSchema);
