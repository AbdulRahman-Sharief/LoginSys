const app = require("./app");
const connectDB = require("./DB/connect");

const PORT = process.env.PORT || 5000;
const server = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
    const DB = process.env.DATABASE.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    );
    await connectDB(DB);
  } catch (error) {
    console.log(error);
  }
};

server();
