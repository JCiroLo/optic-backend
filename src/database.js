const mongoose = require("mongoose");

const URI = process.env.URI || 'mongodb+srv://JuanCiroLo:xiroman@opticacluster.xhir6.mongodb.net/Optica';


mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).catch(e => console.log(e.message));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected");
});

