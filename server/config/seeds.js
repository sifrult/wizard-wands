const db = require('./connection');
const { User, Product } = require('../models')

db.once('open', async () => {
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            core:'Dragon Heart String',
            flexibility: 'Unyielding',
            length: 12.75,
            woodtype: 'Walnut',
            wandtype: 'Stalk',
        },
        {
            core:'Unicorn hair',
            flexibility: 'Swishy',
            length: 14.25,
            woodtype: 'Yew',
            wandtype: 'softSpiral',
        },
        {
            core:'Unicorn Hair',
            flexibility: 'Slightly Yielding',
            length: 9.5,
            woodtype: 'Elder',
            wandtype: 'Spiral',
        }
    ]);

    console.log('products seeded');

    await User.create({
        username: '',
        orders: [
            {
                product: [products[0]._id, products[1]._id, products[2]._id]
            }
        ]
    });

    await User.create({
        username: '',
        password: '',
    });

    console.log('users seeded');

    process.exit();
});