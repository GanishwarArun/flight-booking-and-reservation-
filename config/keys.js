require("dotenv").config();

module.exports = {
  MongoURI: process.env.MongoURI,
  JWT_SECRET: process.env.JWT_SECRET,
};

// module.exports = {
//   MongoURI: "mongodb+srv://ganishwardeveloper:OHb3jneXYHRdOgOz@flightbooking1.t3rpx.mongodb.net/",
// };

// ganishwardeveloper;
// OHb3jneXYHRdOgOz;
// mongodb+srv://ganishwardeveloper:OHb3jneXYHRdOgOz@flightbooking1.t3rpx.mongodb.net/
