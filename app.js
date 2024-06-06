const express = require('express');
const { request, response } = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const limiter = require('./middleware/requestLimiter.js');
const corsOptions = require('./middleware/corsOptions.js');
const { logger } = require('./middleware/eventLogger.js');
const errorHandler = require('./middleware/errorLogger.js');

const hostname = '127.0.0.1';
const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);
app.use(cors(corsOptions));
app.use(limiter);
app.use(helmet());
app.use(logger);
app.use(errorHandler);

app.use('/home', require('./routes/root.js'));
app.use('/api/users', require('./routes/api/users.js'));


app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});