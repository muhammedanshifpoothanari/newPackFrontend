const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    highlight: String,
    description: String, 
    link: String, 
    linkText: String,
    assetId: String,
    isBlocked: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
}, {
    collection: 'banners'
});

module.exports = mongoose.model('Banners', bannerSchema);
