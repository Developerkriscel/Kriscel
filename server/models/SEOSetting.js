import mongoose from 'mongoose';

const SEOSettingSchema = new mongoose.Schema({
    pagePath: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    targetKeyword: {
        type: String,
        trim: true
    },
    metaDescription: {
        type: String,
        required: true,
        trim: true
    },
    keywords: [{
        type: String,
        trim: true
    }],
    ogImage: {
        type: String,
        trim: true
    },
    canonicalUrl: {
        type: String,
        trim: true
    },
    noIndex: {
        type: Boolean,
        default: false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Pre-save hook to update lastUpdated
SEOSettingSchema.pre('save', function(next) {
    this.lastUpdated = new Date();
    next();
});

const SEOSetting = mongoose.model('SEOSetting', SEOSettingSchema);
export default SEOSetting;
