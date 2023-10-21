const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

// console.log(process.env);

app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, () => {
    console.log('Successfully started the server on port : ' + ServerConfig.PORT);
    Logger.info("Successfully stared the server");
});