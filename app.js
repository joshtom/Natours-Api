const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
