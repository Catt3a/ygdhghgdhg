const express = require('express')
const app = express()

app.get('/', (req,res) => {
  const clientIp = req.ip;
  res.send(`Ваш IP: ${clientIp}`);
});
