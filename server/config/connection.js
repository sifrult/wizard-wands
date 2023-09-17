const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:vFiWGhFJgn62BmGASDp6@containers-us-west-84.railway.app:8016', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
