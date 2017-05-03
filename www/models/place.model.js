const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	type: {
		type: String,
		required: true,
		trim: true,
	},
	rate: {
		type: String,
		required: true,
		trim: true,
	},
});

module.exports = mongoose.model('Place', PlaceSchema, 'Place');
