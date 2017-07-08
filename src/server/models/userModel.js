const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});

userSchema.plugin(mongooseHidden, { hidden: { _id: false, password: true}});

export const userModel = mongoose.model('User', userSchema);