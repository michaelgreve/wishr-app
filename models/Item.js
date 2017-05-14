let mongoose = require('mongoose');
require('mongoose-type-url');

let ItemSchema = new mongoose.Schema({
    name: { type: String, required: [true, "can't be blank"] },
    url: mongoose.SchemaTypes.Url,
    description: String
});

ItemSchema.methods.toJSONFor = function () {
    return {
        name: this.name,
        url: this.url,
        description: this.description
    };
};

mongoose.model('Item', ItemSchema);
