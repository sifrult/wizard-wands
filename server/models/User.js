const { Schema, model } = require('mongoose');

const Order = require('./Order');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
    // orders: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Order',
    // }],
    orders: [Order.schema]
    // which one do we chose???
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;


