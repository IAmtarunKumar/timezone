const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const asiaKolkata = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long", // Display full date
    timeStyle: "medium",
    hourCycle: "h23",
  });

  const asiaTokyo = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
    dateStyle: "long", // Display full date
    timeStyle: "medium",
    hourCycle: "h23",
  });

  const europerLondon = new Date().toLocaleString("en-US", {
    timeZone: "Europe/London",
    dateStyle: "long", // Display full date
    timeStyle: "medium",
    hourCycle: "h23",
  });

  const australiaSydney = new Date().toLocaleString("en-US", {
    timeZone: "Australia/Sydney",
    dateStyle: "long", // Display full date
    timeStyle: "medium",
    hourCycle: "h23",
  });

  res.send({
    asiaKolkata,
    asiaTokyo,
    europerLondon,
    australiaSydney,
  });
});

app.listen(`${process.env.port}` || 5500, () => {
  console.log(`running server on port ${process.env.port}`);
});
