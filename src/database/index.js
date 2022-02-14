const mongoose = require('mongoose');

const uri_producao = "mongodb+srv://outrigger:Dwu5cRsfqmF60oup@cluster0.rda29.gcp.mongodb.net/contactsRN?retryWrites=true&w=majority";

mongoose.connect(uri_producao, {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
mongoose.Promise = global.Promise;

module.exports = mongoose;