const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Wands } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('wands');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('wands');
        }, 
        wands: async (parent, { username }) => {
            const params = username? { username } : {};
            return Wands.find(params).sort({ date: -1 });
            // return User.findOne({ username }).populate('wands'); (this might be the one we want?)
        },
        wand: async (parent, { wandId }) => {
            return Wands.findOne({ _id: wandId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('wands');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findAll({ username });

            if (!user) {
                throw new AuthenticationError('This username does not exist!');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            
            return { token, user };
        },
    },
}

module.exports = resolvers;

