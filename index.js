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

app.get("/new", (req, res) => {
  const date = new Date();
  const formattedDateMumbai = format(date, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "Asia/Kolkata",
  });

  const formattedDateTokyo = format(date, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "Asia/Tokyo",
  });

  // Display in London time zone
  const formattedDateLondon = format(date, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "Europe/London",
  });
  console.log("Formatted Date in London Time Zone:", formattedDateLondon);

  // Display in Sydney time zone
  const formattedDateSydney = format(date, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "Australia/Sydney",
  });
  console.log("Formatted Date in Sydney Time Zone:", formattedDateSydney);

  // Display in Mumbai time zone

  console.log("date", date);
  console.log("Asia/Tokyo", formattedDateTokyo);
  console.log("Europe/London", formattedDateLondon);
  console.log("Australia/Sydney", formattedDateSydney);
  console.log("Asia/Kolkata", formattedDateMumbai);

  res.send({
    date,
    formattedDateLondon,
    formattedDateMumbai,
    formattedDateSydney,
    formattedDateTokyo,
  });
});

app.listen(`${process.env.port}` || 5500, () => {
  console.log(`running server on port ${process.env.port}`);
});
