const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Product, Order } = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products'
              });

              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

              return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        products: async (parent, { wandtype }) => {
            const params = {};

            if (wandtype) {
              params.wandtype = {
                $regex: wandtype
              };
            }

            return await Product.find(params);
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id);
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
              });

              return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order.populate('products');

            for (let i = 0; i < products.length; i++) {
              const product = await stripe.products.create({
                wandtype: products[i].wandtype,
                woodtype: products[i].woodtype,
                length: products[i].length,
                flexibility: products[i].flexibility,
                core: products[i].core,
              });

            //   const price = await stripe.prices.create({
            //     product: product.id,
            //     unit_amount: products[i].price * 100,
            //     currency: 'usd',
            //   });

              line_items.push({
                // price: price.id,
                quantity: 1
              });
            }

            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });

            return { session: session.id };
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

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
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ products });

              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

              return order;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;

            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
    },
}

module.exports = resolvers;
