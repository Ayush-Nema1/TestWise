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
    const names = new Set();

data.tests.forEach((test) => {
  if (names.has(test.name)) {
    console.log(test.name);
  }
  names.add(test.name);
});

    const uniqueTests = Array.from(
  new Map(
    updatedTests.map((item) => [
      item.name,
      item,
    ])
  ).values()
);

await MasterTest.insertMany(uniqueTests);

    console.log("Master Tests Inserted Successfully");

    
    process.exit();
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });