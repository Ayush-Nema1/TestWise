const mongoose = require("mongoose");
const slugify = require("slugify");

const MasterTest = require("./model/MasterTest");

const data = require("./master-tests.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/testwise")
  .then(async () => {

    console.log("MongoDB Connected");

    await MasterTest.deleteMany();

    const updatedTests = data.tests.map((test) => ({
      ...test,

      slug: slugify(test.name, {
        lower: true,
        strict: true,
      }),
    }));

    await MasterTest.insertMany(updatedTests);

    console.log("Master Tests Inserted Successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });