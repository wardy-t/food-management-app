const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:       { type: String, required: true },
    amount:     { type: String, required: true },
    useByDate:  { type: String, required: true },
    foodGroup:  { type: String },
    calories:   { type: String },
    DietaryReqs: {
        type: String,
        enum: ['none', 'lactose-free', 'vegan', 'vegetarian'],
    }
});

const userSchema = mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    foods: [foodSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;