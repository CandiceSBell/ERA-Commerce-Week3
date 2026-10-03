const jwt = require("jsonwebtoken");
const secret = "eracommerce_jwt_secret_2026";

// generate a token
const payload = {id: 3, email: "john@eracommerce.com", role: "Customer"};
const token = jwt.sign(payload, secret, {expiresIn: "24h"});
console.log("token:", token);

// verify and decode the token
const decoded = jwt.verify(token, secret);
console.log("decoded:", decoded);