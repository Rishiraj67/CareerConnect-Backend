import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
}); 

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
      const server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });

      server.on("error", (error) => {
        console.error("Server Error:", error);
         throw error;
      });
    })
    .catch((error) => {
      console.error("MongoDB Connection Failed:", error);
      process.exit(1);
    });