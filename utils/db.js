const mongoose =require("mongoose")

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://atul_divedi:atul123@cluster0.q8t4z.mongodb.net/AprilData`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;