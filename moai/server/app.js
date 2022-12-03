const express = require("express");
const cors = require('cors');
const api = require('./api');
const blog = require('./blog');
const utils = require('./utils')
const path = require('path');
const app = express();



app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/public")));

//==== External Server Route Registrations =====
app.use('/api', api);
app.use('/blogs', blog);

// ==== Other Specific Server Routes ====
app.get("/message", (req, res) => {
  res.send({ "message": "This is a Sample Message!" });
});

//==== Wildcard (Passthrough to ClientApp) ====
app.get("*", (req, res) => {

  let mode = process.env.APPMODE || 'DEV';

  if(mode=='DEV'){
    const clientdomain = `http://${req.get('host')}:3000`
    res.sendFile(utils.getModifiedHTML(clientdomain));
  }else{
    res.sendFile(path.join(__dirname,'../client/public/index.html'))
  }
});

module.exports = app;
