const db = require('./connection');
const { User, Product } = require('../models')

db.once('open', async () => {
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            // Bellatrix L.
            core:'Dragon Heart String',
            flexibility: 'Unyielding',
            length: 12.75,
            woodtype: 'Walnut',
            wandtype: 'crookedSpiral',
        },
        {
            // Prof. McGonagall's Wand
            core:'Dragon Heart String',
            flexibility: 'Stiff',
            length: 10.75,
            woodtype: 'Fir',
            wandtype: 'classic',
        },
        {
            // Ginny's wand
            core:'Unicorn hair',
            flexibility: 'Quite Flexible',
            length: 14.25,
            woodtype: 'Yew',
            wandtype: 'softSpiral',
        },
        {
            // Ron's wand #2
            core:'Unicorn hair',
            flexibility: 'Quite Bendy',
            length: 14.0,
            woodtype: 'Willow',
            wandtype: 'softSpiral',
        },
        {
            // elderWand
            core:'Unicorn Hair',
            flexibility: 'Stiff',
            length: 9.5,
            woodtype: 'Elder',
            wandtype: 'stalk',
        }
    ]);

    console.log('products seeded');

    await User.create({
        //Molly Weasley
        username: 'Knittingwiz',
        password: 'password12345',
        orders: [
            {
                product: [products[3]._id, products[4]._id]
            }
        ]
    });

    await User.create({
        // Bellatrix
        username: 'DeathEater1',
        password: 'password12345',
        orders: [{
            products: [products[0]._id]
        }]
    });

    await User.create({
        //Professor McGonagall
        username: 'tabbyCat',
        password: 'password12345',
        orders: [{
            products: [products[2]._id]
        }]
    });

    console.log('users seeded');

    process.exit();
});