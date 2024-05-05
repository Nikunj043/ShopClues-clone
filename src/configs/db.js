
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://nikunj21csu063:Hr5mife99y@cluster0.fni19r0.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  );
};
mongoose.set('strictQuery', true);

module.exports = connect;
