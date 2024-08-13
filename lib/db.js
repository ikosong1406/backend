const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://Zunim:Zunim@database.tlk1xg0.mongodb.net/?retryWrites=true&w=majority&appName=Database";

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "test",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (error) {
    console.log("Error in connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

module.exports = connect;
