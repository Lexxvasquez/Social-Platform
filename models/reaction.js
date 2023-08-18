const { Schema,Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reatreactionBody: {
        type: String,
        require: true,
        maxlength: 280
    },
    username: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => new Date(createdAtVal).toLocaleDateString()
    }
},

    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

module.exports = reactionSchema;