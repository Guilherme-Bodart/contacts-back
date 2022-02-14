const mongoose = require('mongoose');

const uri_producao = "mongodb+srv://outrigger:Dwu5cRsfqmF60oup@cluster0.rda29.gcp.mongodb.net/contactsRN?retryWrites=true&w=majority";

mongoose.connect(uri_producao, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;