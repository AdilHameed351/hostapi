const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olymics", {
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("No connection successful")
})