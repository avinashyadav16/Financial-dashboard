import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());



/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

dotenv.config({
    path: "./.env",
});

// /* MONGOOSE SETUP */
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 9000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // Using process.env.MONGO_URL instead of URL directly
        console.log("Server Started And Database is connected.");

        /* ADD DATA ONE TIME ONLY OR AS NEEDED */

        // await mongoose.connection.db.dropDatabase();
        // console.log("Database is cleared.");

        // KPI.insertMany(kpis);
        // console.log("Data added to the database");

        // Product.insertMany(products);
        // console.log("Data added to the database");

        // Transaction.insertMany(transactions);
        // console.log("Data added to the database");

        app.listen(process.env.PORT, () => { // Using process.env.PORT instead of PORT directly
            console.log(`Server is running on port ${process.env.PORT}`);
        }).on('error', error => {
            console.error('Error starting server:', error);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};



const connectToDatabase = async () => {
    try {
        await mongoose.connect(URL, {

        });
        console.log("Database is connected.");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

startServer();
connectToDatabase();
