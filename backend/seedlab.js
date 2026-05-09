// seedlab.js

const mongoose = require("mongoose");

const Lab = require("./model/Lab");
const MasterTest = require("./model/MasterTest");
const LabTestPricing = require("./model/LabTestPrice");

const MONGO_URI =
  "mongodb://127.0.0.1:27017/testwise";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    seedData();
  })
  .catch((err) => {
    console.log(err);
  });

const seedData = async () => {
  try {

    // CLEAR OLD DATA

    await Lab.deleteMany({});
    await LabTestPricing.deleteMany({});

    // CREATE LAB

    const lab = await Lab.create({

      name: "TestWise Diagnostics",

      slug: "testwise-diagnostics",

      owner_name: "Ayush Nema",

      phone: "9407004701",

      email: "testwise@gmail.com",

      lab_type: "Diagnostic Lab",

      description:
        "Trusted pathology lab with home sample collection.",

      address_line_1:
        "Shubham Colony, Kareli",

      address_line_2:
        "Near Main Road",

      landmark:
        "Kareli Market",

      city: "Narsinghpur",

      state: "Madhya Pradesh",

      pincode: "487221",

      google_maps_link:
        "https://maps.google.com",

      location: {
        type: "Point",

        coordinates: [
          79.0631,
          22.9143,
        ],
      },

      home_collection: true,

      home_collection_fee: 49,

      timings: {

        monday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        tuesday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        wednesday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        thursday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        friday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        saturday: {
          open: "08:00 AM",
          close: "08:00 PM",
          closed: false,
        },

        sunday: {
          open: "09:00 AM",
          close: "02:00 PM",
          closed: false,
        },
      },

      verification_status:
        "approved",

      is_verified: true,

      is_active: true,

      Performance_score: 91,
    });

    console.log("Lab Created");

    // GET TESTS FROM DB

    const test1 =
      await MasterTest.findOne({
        code: "17OH",
      });

    const test2 =
      await MasterTest.findOne({
        code: "24UALB",
      });

    const test3 =
      await MasterTest.findOne({
        code: "AARAPROP",
      });

    // VALIDATE

    if (!test1 || !test2 || !test3) {

      console.log(
        "Tests not found in database"
      );

      process.exit();
    }

    // CREATE PRICING

    await LabTestPricing.create([

      {
        lab_id: lab._id,

        test_id: test1._id,

        price: 499,

        discounted_price: 299,
      },

      {
        lab_id: lab._id,

        test_id: test2._id,

        price: 799,

        discounted_price: 599,
      },

      {
        lab_id: lab._id,

        test_id: test3._id,

        price: 1299,

        discounted_price: 999,
      },
    ]);

    console.log(
      "Lab Test Pricing Added"
    );

    console.log(
      "Seed Completed Successfully"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit();
  }
};