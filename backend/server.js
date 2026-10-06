require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {connectMongo} = require("./mongo");
const db = require("./db");
const errorHandler = require("./middleware/errorHandler");

const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/categories");
const orderRouter = require("./routes/orders");
const reviewRouter = require("./routes/reviews");
const reportRouter = require("./routes/reports");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);
app.use("/reviews", reviewRouter);
app.use("/reports", reportRouter);

app.use(errorHandler);

// POST /login 

// POST /users -- register route, create login for database

// GET /products

// GET /products/category/:categoryId

// GET /products/:id

// POST /products -- Admin only

// POST /orders

// GET /orders

// GET /orders/my -- Current User Orders

// GET /orders/:id

// POST /reviews

// GET /reports/sales -- Admin only


// GET /reports/top-products -- Admin only

// GET /inventory -- Admin only

//  GET /categories

async function startServer(){
    await connectMongo();
    app.listen(PORT, () =>{
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();