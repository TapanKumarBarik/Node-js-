const fs = require("fs");

// fs.readFile("test.txt", (err, data) => {
//   if (data) {
//     console.log(data.toString());
//   } else {
//     console.log(err);
//   }
// });

// fs.readFile("test.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.toString());
//     }
//   });

fs.writeFile(
  "test.txt",
  `The avocado is a medium-sized, evergreen tree in the laurel family. It is native to the Americas and was first 
domesticated in Mesoamerica more than 5,000 years ago. Then as now it was prized for its large and unusually oi
ly fruit`,
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Success");
    }
  }
);

for (let index = 0; index < 100; index++) {
  fs.appendFile(
    "test.txt",
    `The avocado is a medium-sized, evergreen tree in the laurel family. It is native to the Americas and was first 
      domesticated in Mesoamerica more than 5,000 years ago. Then as now it was prized for its large and unusually oi
      ly fruit`,
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Success");
      }
    }
  );
}
