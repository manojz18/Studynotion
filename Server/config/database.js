require('dotenv').config();
const mongoose = require('mongoose');

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('DB Connection Successful')
    })
    .catch((error) => {
        console.log(error)
        console.error(error);
        process.exit(1)
    })
}