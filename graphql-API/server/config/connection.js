const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );