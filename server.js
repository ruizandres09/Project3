const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require("express-jwt");
var jwks = require("jwks-rsa");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev--yit7ecl.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://project3",
  issuer: "https://dev--yit7ecl.auth0.com/",
  algorithms: ["RS256"],
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

app.use(jwtCheck);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
