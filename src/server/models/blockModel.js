const mongoose = require('mongoose');

const blockSchema = mongoose.Schema({
    input: { type: Number, required: true },
    block: { type: String, required: true, unique: true }
}, {
    versionKey: false
});

export const blockModel = mongoose.model('Block', blockSchema);