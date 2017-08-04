const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();

const markerSchema = mongoose.Schema({
    title: { type: String, required: true },
    loc: {
        type: { type: String },
        coordinates: [Number],
    }
}, {
    versionKey: false
});

markerSchema.index({ "loc": "2dsphere" });

markerSchema.plugin(mongooseHidden, { hidden: { _id: false, password: true}});

export const markerModel = mongoose.model('Marker', markerSchema);