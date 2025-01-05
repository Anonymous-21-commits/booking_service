const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { PORT } = require('./config/serverConfig');
const apiRoutes = require("./routes/v1");
app.listen(PORT, () => {
    console.log('server started', PORT);
    app.use('/api', apiRoutes);
})