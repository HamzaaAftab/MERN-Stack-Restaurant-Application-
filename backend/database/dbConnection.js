import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant_Application", // Avoid spaces in database names
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to Database Successfully");
    })
    .catch((error) => {
        console.log("Some Error Occurred While Connecting to Database:", error);
    });
};
